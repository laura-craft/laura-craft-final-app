import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  title = 'ng-calendar-demo';
  selectedDate = new Date('2020/12/17');
  startAt = new Date('2020/12/01');
  minDate = new Date('2020/12/14');
  maxDate = new Date (new Date().setMonth(new Date().getMonth()+1));
  year: any;
  DayAndDate: string;

  constructor() { 
    this.onSelect(this.selectedDate);
  }

  onSelect(event) {
    console.log(event);
    this.selectedDate = event;
    const dateString = event.toDateString();
    const dateValue = dateString.split('');
    this.year = dateValue[3];
    this.DayAndDate = dateValue[0] + ',' + '' + dateValue[1] + '' + dateValue[2];
  }

 myDateFilter = (d: Date): boolean => {
   const day = d.getDay();
   return day !== 0 && day !==6;
 }

  ngOnInit(): void {

}
}