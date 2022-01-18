import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {
    this.selectedValue = 1;
  }

  label1 = '1';
  label2 = '2';
  label3 = '3';

  selectedValue;

  changeLabels() {
    if (this.label1 === '1') {
      this.label1 = '4';
    } else {
      this.label1 = '1';
    }

    if (this.label2 === '2') {
      this.label2 = '5';
    } else {
      this.label2 = '2';
    }

    if (this.label3 === '3') {
      this.label3 = '6';
    } else {
      this.label3 = '3';
    }
  }
}
