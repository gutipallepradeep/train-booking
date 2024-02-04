import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainService } from '../train.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})


export class SearchComponent implements OnInit {
  trains!: TrainService;  // Declare the trains property
  price: number = 0; 
  train: any[] = [
    { 
      number: 17225, 
      classes: "1A 2A 3A SL GEN", 
      startTime: "09:00", 
      EndTime:"18.00",
      duration: "09:00 Hrs", 
      price: 216
      
    },
    { 
      number: 17603, 
      classes: "1A 2A 3A SL GEN", 
      startTime: "10:00", 
      EndTime:"21.00",
      duration: "11:00 Hrs", 
      price: 516
    },
    { 
      number: 97725, 
      classes: "1A 2A 3A SL GEN", 
      startTime: "22:00", 
      EndTime:"06.00",
      duration: "8:00 Hrs", 
      price: 1016
    }
  ];

  constructor(private trainService: TrainService,private authService:AuthService,private router:Router) { }
  availableSeats: number = 1000; // Example number of available seats
  ticketAmount: number = 516; // Example ticket amount
  availableSeats1: number = 1000; // Example number of available seats
  ticketAmount1: number = 1016; // Example ticket amount
  availableSeats2: number = 1000; // Example number of available seats
  ticketAmount2: number = 215; // Example ticket amount
  availableSeats3: number = 1000; // Example number of available seats
  ticketAmount3: number = 1516; // Example ticket amount
  ngOnInit(): void {
    // Initialize or fetch data for the 'trains' property
    this.trains = this.trainService;
    // Example of setting a value in localStorage
    const availableSeatsValue = localStorage.getItem('availableSeats');
this.availableSeats = availableSeatsValue ? parseInt(availableSeatsValue) : 1000;

const availableSeats1Value = localStorage.getItem('availableSeats1');
this.availableSeats1 = availableSeats1Value ? parseInt(availableSeats1Value) : 1000;

const availableSeats2Value = localStorage.getItem('availableSeats2');
this.availableSeats2 = availableSeats2Value ? parseInt(availableSeats2Value) : 1000;

const availableSeats3Value = localStorage.getItem('availableSeats3');
this.availableSeats3 = availableSeats3Value ? parseInt(availableSeats3Value) : 1000;
    
  }
  
  
  checkavailable(): void{
    alert(this.availableSeats);
  }
  checkavailable1(): void{
    alert(this.availableSeats1);
  }
  checkavailable2(): void{
    alert(this.availableSeats2);
  }
  checkavailable3(): void{
    alert(this.availableSeats3);
  }
  

  
  navigateToTrain(trainNumber: number, startStation: string, endStation: string,price: number): void {
    const showSuccessMessage = this.authService.showSuccessMessage$;
    console.log(this.authService.getUserEmail());
    showSuccessMessage.subscribe((successMessage) => {
      if (successMessage) {
        this.router.navigate(['/trains', trainNumber], {
          queryParams: {
            startStation,
            endStation,
            price,
          }
        });
      } else {
        console.log('Show Success Message is false. Navigating to Login.');
        this.router.navigate(['/login']);
        
      }
    });
    } 
  }




