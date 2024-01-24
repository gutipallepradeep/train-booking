import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToLogin(): void {
    this.router.navigateByUrl('/login');
  }
  navigateToregister(): void {
    this.router.navigateByUrl('/register');
  }
  navigateToHome(): void {
    this.router.navigateByUrl('/home');
  }
  
}
