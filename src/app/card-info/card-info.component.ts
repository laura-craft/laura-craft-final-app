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
      img: 'http:../../assets/checklist-1622517_1920.png'
    },
    {
      title: 'To Do Lists',
      description: 'Keep all your "To Do Lists" in one spot',
      buttonText: 'Go to "To Do Lists"',
      img: 'http:../../assets/checklist-1622517_1920.png'
      },
      {
      title: 'Calendar',
      description: 'Keep all your events organized',
      buttonText: 'Go to Calendar',
      img: 'http:../../assets/checklist-1622517_1920.png'
      },
      {
      title: 'Family Wish Lists',
      description: 'Keep your wishlists in one location',
      buttonText: 'Go to Wish Lists',
      img: 'http:../../assets/checklist-1622517_1920.png'
      },
  
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
