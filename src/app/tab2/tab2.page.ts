import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

	// google-chart parameters
	pieChartData: any[]=[];
	title = 'Expenditure';
	type:any = 'PieChart';
    options = {};
	width = 600;
	height = 400;
	spend: [string, { category: string, amount: number, date: Date }][] = [];

	constructor(private storage: Storage) {}

	async ngOnInit() {
		// Connect to database	
		this.storage = await this.storage.create();
		this.useAngularLibrary();
		this.listSpend();
	}

  	async useAngularLibrary() {

		// Retrieve all keys in storage
		const keys = await this.storage.keys();
		console.log(keys);
		// get value by key
		for (const key of keys) {
			var totalExpenditure = 0;
			const expenditures = await this.storage.get(key);
			
			for(const e of expenditures){
				const number= Number(e.substring(0, e.indexOf('*')));
				totalExpenditure= totalExpenditure + number;
			}
			this.pieChartData.push([key, totalExpenditure])
		}

		console.log("pie chart" + this.pieChartData);
	}

	async listSpend() {
		const keys = await this.storage.keys(); // Retrieve all keys
	  
		for (const key of keys) {
		  const spendItems = await this.storage.get(key); // Retrieve the array of spend items for the current key
	  
		  for (const list of spendItems) {
			// Extract the amount and date from the item
			const amountString = list.substring(0, list.indexOf('*'));
			const dateString = list.substring(list.indexOf('*') + 1);
	  
			// Parse the amount as a number and the date as a Date object
			const amount = Number(amountString);
			const date = new Date(dateString);
	  
			// Push the data to the spend array
			this.spend.push([key, { category: key, amount, date }]);
			console.log([key, { category: key, amount, date }]);
		  }
		}
	}
	  
}

