import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Items } from './items.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  itemsChanged = new Subject<Items[]>();
  items: Items[] = [
    new Items('', 0),
    // new Items('', 10),
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
  deleteItems(index: number) {
    this.items.splice(index, 1);
    this.itemsChanged.next(this.items.slice());
  }
}