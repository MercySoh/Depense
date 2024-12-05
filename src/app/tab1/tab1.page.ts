import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  totalExpenditure = 0;
  constructor(private storage: Storage) {}

  async ngOnInit() {
    // Initialize storage
    this.storage = await this.storage.create();
    this.getTotalExpenditure();
  }

  async getTotalExpenditure() {
    let total = 0;
  
    // Retrieve all keys in storage
    const keys = await this.storage.keys();
  
    // Iterate through each key
    for (const key of keys) {
      const expenditures = await this.storage.get(key);
  
      // Ensure the expenditures data is valid
      if (expenditures && Array.isArray(expenditures)) {
        for (const expenditure of expenditures) {

          const [amountStr] = expenditure.split('*');
          const amount = parseFloat(amountStr);

          if (!isNaN(amount)) {
            total += amount;
          }
        }
      }
    }

    console.log('Total Expenditure:', total);
    this.totalExpenditure = total;
  }
  

}
