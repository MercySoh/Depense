import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

constructor(private storage: Storage) {}

  pieChartData: any;

  ngOnInit() {
    this.useAngularLibrary();
	this.generateItems();
  }

  useAngularLibrary() {
    this.pieChartData = {
      chartType: 'PieChart',
      dataTable: [
        ['Categories', 'Cost'],
        ['Gas',     80],
        ['Electric',      105],
        ['Grocery',  50],
		['Food',50]
      ],
      options: {
      'title': 'Expenses',
      'width': 400,
      'height': 300
      }
    };
  }
items = [];

private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}` as never);
    }
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}



