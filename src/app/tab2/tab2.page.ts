import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  pieChartData: any;

  ngOnInit() {
    this.useAngularLibrary();
  }

  useAngularLibrary() {
    this.pieChartData = {
      chartType: 'PieChart',
      dataTable: [
        ['Languages', 'Percent'],
        ['Ionic',     33],
        ['Angular',      33],
        ['JavaScript',  33]
      ],
      options: {
      'title': 'Technologies',
      'width': 400,
      'height': 300
      }
    };
  }
}
