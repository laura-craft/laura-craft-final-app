import { Component } from '@angular/core';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent  {
  items = [];
  newItem: string="";

  pushItem(){
  	if (this.newItem != "") {
  		this.items.push(this.newItem);
		  this.newItem = "";
  	}
  }

  removeItem(i){
  	this.items.splice(i, 1);
  }
}
//Credit: Angular/Angular 2 to do/Geeks for Geeks 