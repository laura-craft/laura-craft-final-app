import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {
  cards = [
    {
      title: 'Shopping Lists',
      description: 'Grocery shopping, gift purchases, etc.',
      buttonText: 'Go to Shopping Lists',
      img: 'http:../../assets/grocery-list-templates.jpg',
      route: 'shopping-lists'
    },
    {
      title: 'To Do Lists',
      description: 'Keep all your "To Do Lists" in one spot',
      buttonText: 'Go to "To Do Lists"',
      img: 'http:../../assets/to-do-list.jpg',
      route: 'to-do-list'
      },
      {
      title: 'Calendar',
      description: 'Keep all your events organized',
      buttonText: 'Go to Calendar',
      img: 'http:../../assets/calendar.jpg.optimal.jpg',
      route: 'calendar'
      },
      {
      title: 'Planners, Storage Bins and more!',
      description: 'Buy all your organization needs',
      buttonText: 'Online Store',
      img: 'http:../../assets/Best+planner+2019-2.png',
      route: 'online-store'
      },
  
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
