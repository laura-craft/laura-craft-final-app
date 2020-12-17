import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component'
import { CardInfoComponent } from './card-info/card-info.component';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: '', component: WelcomePageComponent },
  {path: 'main-page', component: MainPageComponent, children: [
      { path: '', component: CardInfoComponent },
      { path: 'shopping-lists', component: ShoppingListsComponent },
      { path: 'to-do-list', component: ToDoListComponent },
      { path: 'calendar', component: CalendarComponent }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
