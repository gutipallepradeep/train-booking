import { Component ,OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit  {
  
  loginFormValues: any = { email: '', password: '' };
  email:any;
  password:any;
  captcha: string = ''
  captchaText: string = ''; ;
  captchaInput: string = '';
  showSuccessMessage = false;
isLoggedIn = false;
  constructor(private authService: AuthService,private router: Router,  ) { }
  ngOnInit(): void {
    this.email = '';
    this.password = '';
    this.generateCaptcha();
  }
  login(): void {
   
    console.log('Entered Email:', this.loginFormValues.email);
    console.log('Entered Password:', this.loginFormValues.password);
    if (!this.captchaInput) {
      alert('Please enter the captcha.');
      return;
    }
  
    
    if (this.captchaInput !== this.captcha) {
      alert('Please enter the correct captcha.');
      return;
    }
  
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
  generateCaptcha(): void {
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 6;
    this.captcha = Array.from({ length }, () =>
     possibleChars[Math.floor(Math.random() * possibleChars.length)]
  ).join('');
    }
}

