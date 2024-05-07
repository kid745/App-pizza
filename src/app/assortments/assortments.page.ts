import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-assortments',
  templateUrl: './assortments.page.html',
  styleUrls: ['./assortments.page.scss'],
})
export class AssortmentsPage implements OnInit {

  
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
