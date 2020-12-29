import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Items } from './items.model';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-lists',
  templateUrl: 'shopping-lists.component.html',
  styleUrls: ['shopping-lists.component.scss']
})
export class ShoppingListsComponent implements OnInit, OnDestroy {
  items: Items[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.items = this.slService.getItems();
    this.subscription = this.slService.itemsChanged
      .subscribe(
        (items: Items[]) => {
          this.items = items;
        }
      );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

