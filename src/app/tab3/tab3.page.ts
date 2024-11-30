import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  key: string = ''; // Holds the input key
  value: number = 0; // Holds the input value
  retrievedValue: string | null = null; // Holds the retrieved value

  constructor(private storage: Storage) {
    this.key = '';  
    this.value = 0; 
    this.retrievedValue = ''; 
  }
  async ngOnInit() {
    // Initialize storage
    this.storage = await this.storage.create();
  }
  async saveData(key: string, value: number) {
    var amount=0;
     amount = await this.storage.get(key);
     if(amount>0){
     value=value+amount;
     }
    await this.storage.set(key, value);
    console.log('Data saved!');
  }

  

}
