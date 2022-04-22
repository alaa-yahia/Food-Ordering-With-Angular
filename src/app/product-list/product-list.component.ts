import { Component, OnInit } from '@angular/core';
import { items } from './data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  items = items;
  quantity: Array<number> = this.items.map((value) => 0);
  constructor() {}

  ngOnInit(): void {}

  increment(index: number) {
    return this.quantity[index]++;
  }

  decrement(index: number) {
    return this.quantity[index]--;
  }
}
