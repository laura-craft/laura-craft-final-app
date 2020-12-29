import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListsComponent } from './shopping-lists.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

const routes: Routes = [
    {
        path: '',
        component: ShoppingListsComponent
    }
]
@NgModule({
  declarations: [
    ShoppingListsComponent,
    ShoppingEditComponent
    
  ],
  imports: [
    
    FormsModule,
    RouterModule.forChild(routes),
    
    
    
  
  ],
  providers: [
    
  ],
  bootstrap: [ShoppingListsComponent]
})
export class ShoppingListModule { }
