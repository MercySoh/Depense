import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';


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

constructor(private storage: Storage) {}

	async ngOnInit() {
	// Connect to database	
	this.storage = await this.storage.create();
    this.useAngularLibrary();
	this.generateItems();
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
items = [];

private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 10; i++) {
      this.items.push(`Item ${count + i}` as never);
    }
  }

//   onIonInfinite(ev: InfiniteScrollCustomEvent) {
//     this.generateItems();
//     setTimeout(() => {
//       (ev as InfiniteScrollCustomEvent).target.complete();
//     }, 500);
//   }

}



