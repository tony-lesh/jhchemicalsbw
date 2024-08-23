import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

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
