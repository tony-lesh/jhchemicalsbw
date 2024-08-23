import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

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
