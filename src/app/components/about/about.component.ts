import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('aboutImg', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(500)
      ])
    ]),
    trigger('aboutText', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate(500)
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
