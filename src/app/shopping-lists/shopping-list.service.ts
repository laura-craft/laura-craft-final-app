import { Subject } from 'rxjs';

import { Items } from './items.model';

export class ShoppingListService {
  itemsChanged = new Subject<Items[]>();
  private items: Items[] = [
    new Items('Apples', 5),
    new Items('Tomatoes', 10),
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