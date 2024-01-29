import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router,private authService:AuthService) {}
  isLoggedIn: boolean = false;
  showSuccessMessage: boolean = false;



  ngOnInit() {
    // Subscribe to the AuthService observable to get login state changes
    this.authService.showSuccessMessage$.subscribe(value => {
      this.showSuccessMessage = value;
      console.log('isLoggedIn state:', this.isLoggedIn);
      if(this.showSuccessMessage==true){
      this.isLoggedIn = this.authService.isLoggedIn();
    console.log( 'Initial isLoggedIn state:', this.isLoggedIn);
      }

    });
   
  }
  navigateToLogin(): void {
    this.router.navigateByUrl('/login');

  }
  navigateToregister(): void {
    this.router.navigateByUrl('/register');
  }
  navigateToHome(): void {
    this.router.navigateByUrl('/home');
  }
  logout() {

    this.authService.setShowSuccessMessage(false);
    this.isLoggedIn = false;
    this.router.navigate(['/home']); 
  }
}
