import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component'
import { CardInfoComponent } from './card-info/card-info.component';
// import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WishListsComponent } from './wish-lists/wish-lists.component';

const routes: Routes = [
  {path: '', component: WelcomePageComponent },
  {path: 'main-page', component: MainPageComponent, children: [
      { path: '', component: CardInfoComponent },
      { path: 'shopping-lists', loadChildren: './shopping-lists/shopping-list.module#ShoppingListModule', },
      { path: 'to-do-list', component: ToDoListComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'wish-lists', component: WishListsComponent }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
