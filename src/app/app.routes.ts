import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {APP_BASE_HREF, CommonModule, NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {LandingComponent} from "./LandingPage/landing.component";
import {AboutComponent} from "./About/about.component";
import {BlogComponent} from "./Blog/blog.component";
import {CartComponent} from "./Cart/cart.component";
import {CheckoutComponent} from "./Checkout/checkout.component";
import {ContactComponent} from "./Contact/contact.component";
import {ServiceComponent} from "./Services/service.component";
import {ShopComponent} from "./Shop/shop.component";

export const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    BlogComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    ServiceComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/landing', pathMatch: 'full'},
      {path: 'landing', component: LandingComponent, data: {animation: 'landing'}},
      {path: 'about', component: AboutComponent, data: {animation: 'about'}},
      {path: 'blog', component: BlogComponent, data: {animation: 'blog'}},
      {path: 'contact', component: ContactComponent, data: {animation: 'contact'}},
      {path: 'cart', component: CartComponent, data: {animation: 'cart'}},
      {path: 'checkout', component: CheckoutComponent, data: {animation: 'checkout'}},
      {path: 'service', component: ServiceComponent, data: {animation: 'service'}},
      {path: 'shop', component: ShopComponent, data: {animation: 'shop'}},
      {path: 'landing', redirectTo: '/landing'},
    ], {
      useHash: true
    }),
    NgOptimizedImage
  ],
  // providers: [{ provide: APP_BASE_HREF, useValue: '/jhchemicals/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
