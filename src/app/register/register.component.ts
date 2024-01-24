import { Component } from '@angular/core';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [TrainService] 
})
export class RegisterComponent {
  user: any = {
    email: '',
    name: '',
    password: '',
    number: '',
  };
 
  constructor(private userService: TrainService) {}

  onSubmit() {
    
    console.log('Registration Data:', this.user);

    this.userService.registerUser(this.user).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        alert("welcome");
      },
      (error) => {
        console.error('Failed to register user:', error);
      }
    );
  }
}
