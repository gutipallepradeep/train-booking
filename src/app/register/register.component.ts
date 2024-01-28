// import { Component } from '@angular/core';
// import { TrainService } from '../train.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css',
//   providers: [TrainService] 
// })
// export class RegisterComponent {
//   user: any = {
//     email: '',
//     name: '',
//     password: '',
//     number: '',
//   };
 
//   constructor(private userService: TrainService,private router:Router) {}

//   onSubmit() {
    
//     console.log('Registration Data:', this.user);

//     this.userService.registerUser(this.user).subscribe(
//       (response) => {
//         console.log('User registered successfully:', response);
//         alert("welcome"); 
//         this.user = {
//           email: '',
//           name: '',
//           password: '',
//           number: '',
//         };
//         this.router.navigate(['/login']);
//       },
//       (error) => {
//         console.error('Failed to regist  er user:', error);
//       }
//     ); 
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainService } from '../train.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [TrainService],
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private userService: TrainService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      number: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Registration Data:', this.userForm.value);

      this.userService.registerUser(this.userForm.value).subscribe(
        (response) => {
          console.log('User registered successfully:', response);
          alert('Welcome');
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Failed to register user:', error);
        }
      );
    } else {
      alert('Please fill in all fields with valid data.');
    }
  }
}

