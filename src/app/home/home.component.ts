import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showSuccessMessage = false;

  

  constructor(private authService: AuthService, private router: Router) {}

  navigateToSearch(): void {
    const showSuccessMessage = this.authService.showSuccessMessage$;

    showSuccessMessage.subscribe((successMessage) => {
      if (successMessage) {
        console.log('Show Success Message is true. Navigating to Search.');
        this.router.navigate(['search']);
      } else {
        console.log('Show Success Message is false. Navigating to Login.');
        this.router.navigate(['login']); 
      }
    });
  }


  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
  navigateToLogin(): void {
    
    this.router.navigate(['login']);
  }
  navigateToHome(): void {
    
    this.router.navigate(['home']);
  }
  
 
}
