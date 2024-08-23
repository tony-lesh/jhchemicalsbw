import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in')
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0
        }))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {

  currentIndex = 0;
  imageUrls = ['/images/l-thinners.png', '/images/snake-repellent.png', '/images/turpentine-thinners.png'];
  i: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
    }, 3000);
  }}
