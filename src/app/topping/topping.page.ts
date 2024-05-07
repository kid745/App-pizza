import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topping',
  templateUrl: './topping.page.html',
  styleUrls: ['./topping.page.scss'],
})
export class ToppingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToNotificationsPage(){
    this.router.navigate(['/notification']);
   }
   goToHome() {
    // Điều hướng về trang chính (home)
    this.router.navigate(['/home']);
  }
}
