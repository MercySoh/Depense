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
    var expenditure =[];
    const currentDate = new Date();
    expenditure = await this.storage.get(key);
    console.log(expenditure);
    
    if(value > 0){
      if(expenditure===null || expenditure===""){
      var val=value + "*" +currentDate;
      expenditure =[val];
      }
      else{
      expenditure.push(value + "*" +currentDate);
      }
      await this.storage.set(key, expenditure);
      console.log('Data saved!' + value);
    }
    else{

      console.log('Data not saved! need to be greater than 0');
    }
  }


  

}
