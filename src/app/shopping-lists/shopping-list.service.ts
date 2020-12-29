import { Subject } from 'rxjs';

import { Items } from './items.model';
import { Injectable } from '@angular/core';

@Injectable ({providedIn: 'root'})

export class ShoppingListService {
  itemsChanged = new Subject<Items[]>();
  private items: Items[] = [
    new Items('', 5),
    new Items('', 10),
  ];

  getItems() {
    return this.items.slice();
  }

  addItem(item: Items) {
    this.items.push(item);
    this.itemsChanged.next(this.items.slice());
  }

  addItems(item: Items[]) {
    this.items.push(...item);
    this.itemsChanged.next(this.items.slice());
  }
}