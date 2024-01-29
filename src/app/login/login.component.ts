import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginFormValues: any = { email: '', password: '' };
  showSuccessMessage = false;
isLoggedIn = false;
  constructor(private authService: AuthService,private router: Router,  ) { }

  login(): void {
   
    console.log('Entered Email:', this.loginFormValues.email);
    console.log('Entered Password:', this.loginFormValues.password);

    this.authService.login(this.loginFormValues.email, this.loginFormValues.password)
      .subscribe(
        (response) => {
          console.log('Login successful:', response);
          this.showSuccessMessage = true;
          alert("welcome");
          this.router.navigate(['/home']);
          this.authService.setShowSuccessMessage(true);
          this.isLoggedIn = true
          
        },
        (error) => {
          console.error('Login failed:', error);
          alert("fail");
          this.router.navigate(['/register']);
        }
      );
  }
}
