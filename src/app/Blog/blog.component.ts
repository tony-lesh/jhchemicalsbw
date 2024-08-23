import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
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
export class BlogComponent implements OnInit {

  currentIndex = 0;
  imageUrls = ['/images/l-thinners.png', '/images/snake-repellent.png', '/images/turpentine-thinners.png'];
  i: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
    }, 3000);
  }}
