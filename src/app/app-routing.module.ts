import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { MainNavComponent } from './main-nav/main-nav.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'main-nav', component:MainNavComponent},
  {path: 'card-info', component:CardInfoComponent},
  {path: 'shopping-lists', component: ShoppingListsComponent},
  {path: 'to-do-lists', component: ToDoListComponent },
  {path: 'calendar', component: CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
