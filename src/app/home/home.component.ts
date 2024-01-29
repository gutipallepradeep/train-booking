import { Component} from '@angular/core';
// import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TrainService } from '../train.service';
import { Router } from '@angular/router';
// import { ResponseModel } from '../../Station';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  fromStation: string = '';
  toStation: string = '';
  dateOfTravel: string = '';
  showSuccessMessage = false;
  
  

  constructor(private authService: AuthService, private router: Router,private train:TrainService) {}
  

  navigateToSearch(): void {
    const showSuccessMessage = this.authService.showSuccessMessage$;
    this.train.selectedFromStation = this.fromStation;
    this.train.selectedToStation = this.toStation;
    this.train.selectedDateOfTravel = this.dateOfTravel;

    
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
