import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatNativeDateModule} from '@angular/material/core';
import { WishListsComponent } from './wish-lists/wish-lists.component';
import { ShoppingListService } from './shopping-lists/shopping-list.service';
import { ShoppingListModule } from './shopping-lists/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    MainPageComponent,
    HeaderComponent,
    CardInfoComponent,
    ToDoListComponent,
    CalendarComponent,
    WishListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MDBBootstrapModule.forRoot(),
    ShoppingListModule
  
  ],
  providers: [
    MatDatepickerModule,
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
