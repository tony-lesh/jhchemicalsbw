import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onFormSubmit(data: any) {
    console.log(data);
    this.router.navigateByUrl('/');
  }

}

export class LandingFileComponent {
}
