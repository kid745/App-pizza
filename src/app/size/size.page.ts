import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-size',
  templateUrl: './size.page.html',
  styleUrls: ['./size.page.scss'],
})
export class SizePage implements OnInit {

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
