import { Component, OnInit } from '@angular/core';
import { customerService } from './customer.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _customerService: customerService) {}
  cusdata: any[] = [];
  trandata: any[] = [];
  mergedData: any = [];
  searchTerm: string = '';
  trmsearch!: string;
  data: any;
  graf1: boolean = true;
  graf2: boolean = false;
  graf3: boolean = false;
  graf4: boolean = false;
  graf5: boolean = false;
  Select_Student: string = ' Select Student';

  mergeArrays() {
    this.mergedData = this.cusdata.flatMap((cust) => {
      return this.trandata
        .filter((trans) => trans.customer_id == cust.id)
        .map((trans) => ({
          CustomerId: cust.id,
          Name: cust.name,
          TransId: trans.id,
          Date: trans.date,
          Amount: trans.amount,
        }));
    });
  }
  ngOnInit() {
    this._customerService.getDatacustomer().subscribe({
      next: (res) => {
        this.cusdata = res.customers;
        this.trandata = res.transactions;
        this.mergeArrays();
        console.log(this.mergedData);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  chartOptions1 = {
    title: {
      text: 'Ahmed Ali Transaction graph',
    },
    data: [
      {
        type: 'line',
        color: 'green',

        dataPoints: [
          { label: 'Jan 1, 2022 ', y: 1000 },
          { label: 'Jan 2, 2022', y: 2000 },
          { label: 'Jan 3, 2022', y: 0 },
        ],
      },
    ],
  };

  chartOptions2 = {
    title: {
      text: 'Aya Elsayed Transaction graph',
    },
    data: [
      {
        type: 'line',
        color: 'green',

        dataPoints: [
          { label: 'Jan 1, 2022 ', y: 550, indexLabel: 'Lowest\u2193' },
          { label: 'Jan 2, 2022', y: 1300, indexLabel: 'Highest\u2191' },
          { label: 'Jan 3, 2022', y: 0 },
        ],
      },
    ],
  };
  chartOptions3 = {
    title: {
      text: 'Mina Adel Transaction graph',
    },
    data: [
      {
        type: 'line',
        color: 'green',

        dataPoints: [
          { label: 'Jan 1, 2022 ', y: 500, indexLabel: 'Lowest\u2193' },
          { label: 'Jan 2, 2022', y: 1250, indexLabel: 'Highest\u2191' },
          { label: 'Jan 3, 2022', y: 0 },
        ],
      },
    ],
  };
  chartOptions4 = {
    title: {
      text: 'Sarah Reda Transaction graph',
    },
    data: [
      {
        type: 'line',
        color: 'green',

        dataPoints: [
          { label: 'Jan 1, 2022 ', y: 750 },
          { label: 'Jan 2, 2022', y: 0 },
          { label: 'Jan 3, 2022', y: 0 },
        ],
      },
    ],
  };
  chartOptions5 = {
    title: {
      text: 'Mohamed Sayed Transaction graph',
    },
    data: [
      {
        type: 'line',
        color: 'green',

        dataPoints: [
          { label: 'Jan 1, 2022 ', y: 2500, indexLabel: 'Highest\u2191' },
          { label: 'Jan 2, 2022', y: 875, indexLabel: 'Lowest\u2193' },
          { label: 'Jan 3, 2022', y: 0 },
        ],
      },
    ],
  };

  show(num: Number): void {
    if (num == 1) {
      this.graf1 = true;
      this.graf2 = false;
      this.graf3 = false;
      this.graf4 = false;
      this.graf5 = false;
      this.Select_Student = 'Ahmed Ali';
    } else if (num == 2) {
      this.graf1 = false;
      this.graf2 = true;
      this.graf3 = false;
      this.graf4 = false;
      this.graf5 = false;
      this.Select_Student = 'Aya Elsayed';
    } else if (num == 3) {
      this.graf1 = false;
      this.graf2 = false;
      this.graf3 = true;
      this.graf4 = false;
      this.graf5 = false;
      this.Select_Student = 'Mina Adel';
    } else if (num == 4) {
      this.graf1 = false;
      this.graf2 = false;
      this.graf3 = false;
      this.graf4 = true;
      this.graf5 = false;
      this.Select_Student = 'Sarah Reda';
    } else if (num == 5) {
      this.graf1 = false;
      this.graf2 = false;
      this.graf3 = false;
      this.graf4 = false;
      this.graf5 = true;
      this.Select_Student = 'Mohamed Sayed';
    }
  }
}
