import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  loginFormValues: any = { email: '', password: '' };
  showSuccessMessage = false;
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) { }

  admin(): void {
    console.log('Entered Email:', this.loginFormValues.email);
    console.log('Entered Password:', this.loginFormValues.password);

    // Check if the entered email and password are for the admin
    if (this.loginFormValues.email.toLowerCase() === 'admin@gmail.com' && this.loginFormValues.password === 'admin') {
      console.log('Admin login successful');
      this.showSuccessMessage = true;
      alert('Welcome, Admin!');
      this.router.navigate(['/table']); // Redirect to admin page
      this.authService.setShowSuccessMessage(true);
      this.isLoggedIn = true;
    } else {
      console.error('Admin login failed');
      alert('Admin login failed. Please check your credentials.');
    }
  }
}
