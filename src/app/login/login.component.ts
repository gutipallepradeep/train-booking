import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginFormValues: any = { email: '', password: '' };
  showSuccessMessage = false;

  constructor(private authService: AuthService) { }

  login(): void {
   
    console.log('Entered Email:', this.loginFormValues.email);
    console.log('Entered Password:', this.loginFormValues.password);

    this.authService.login(this.loginFormValues.email, this.loginFormValues.password)
      .subscribe(
        (response) => {
          console.log('Login successful:', response);
          this.showSuccessMessage = true;
          alert("welcome");
        },
        (error) => {
          console.error('Login failed:', error);
          alert("fail");
        }
      );
  }
}
