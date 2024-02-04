// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TrainService } from '../train.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {
  // Initialize component properties
  trainNumber: number = 0;
  startStation: string = '';
  endStation: string = '';
  passengers: any[] = [];
  passengerCount: number = 0;
  userEmail: string = '';
  Price: number = 0;

  // Form data for adding a passenger
  newPassenger: any = {
    name: '',
    age: 0,
    gender: '',
    from_station: '',
    to_station: '',
    email: ''
  };

  constructor(
    private route: ActivatedRoute,
    private trainService: TrainService,
    private authService: AuthService,
    private router:Router
  ) {}

  ngOnInit(): void {
    // Initialize user email from AuthService
    this.userEmail = this.authService.getUserEmail() || '';

    // Subscribe to route parameters
    this.route.params.subscribe(params => {
      this.trainNumber = +params['id'];
    });

    // Subscribe to query parameters
    this.route.queryParams.subscribe(queryParams => {
      this.startStation = queryParams['startStation'];
      this.endStation = queryParams['endStation'];
      this.Price = queryParams['price'];
    });

    // Initialize passenger count from localStorage
    const storedCount = localStorage.getItem('passengerCount');
    this.passengerCount = storedCount ? +storedCount : 0;

    // Set the trainNumber in newPassenger
    this.newPassenger.trainNumber = this.trainNumber;
    this.newPassenger.email = this.authService.getUserEmail();
  }

  addPassenger(): void {
    // Set values for from_station and to_station
    this.newPassenger.from_station = this.startStation;
    this.newPassenger.to_station = this.endStation;

    // Call the TrainService to add the passenger
    this.trainService.addPassenger(this.newPassenger).subscribe(
      (response) => {
        // Handle the response as needed
        console.log('Passenger added successfully:', response, this.authService.getUserEmail());
        // Add the new passenger to the local list for display
        this.passengers.push({ ...response, email: this.authService.getUserEmail() });
        // Increment the passenger count
        this.passengerCount++;
        // Update localStorage
        localStorage.setItem('passengerCount', this.passengerCount.toString());
        // Clear the form data
        this.newPassenger = { name: '', age: 0, gender: '', from_station: '', to_station: '', email: this.newPassenger.email };
      },
      (error) => {
        // Handle the error
        console.error('Error adding passenger:', error);
      }
    );
  }

  deletePassenger(passenger: any): void {
    // Call the TrainService to delete the passenger by name
    this.trainService.deletePassengerByName(passenger.name).subscribe(
      () => {
        
        console.log('Passenger deleted successfully by Name.');
      
        this.passengers = this.passengers.filter((p) => p.name !== passenger.name);
      },
      (error) => {
        
        console.error('Error deleting passenger by Name:', error);
      }
    );
  }
  resetStoredCount(): void {
    // Reset storedCount to zero
    const totalPrice = this.Price * this.passengerCount;
    const availableSeatsKey = `availableSeats${this.trainNumber}`;
  const availableSeatsValue = localStorage.getItem(availableSeatsKey);
  const availableSeats = availableSeatsValue ? parseInt(availableSeatsValue) : 1000;
  localStorage.setItem(availableSeatsKey, (availableSeats - this.passengerCount).toString());
    localStorage.setItem('passengerCount', '0');
    this.passengerCount = 0;

    // Create an array to store passenger details
    const passengerDetails = [];

    // Generate random PNR number (replace this with your logic)
    const pnrNumber = Math.floor(Math.random() * 10000000000);

    // Iterate over passengers and generate seat numbers
    for (const passenger of this.passengers) {
      // Generate random seat number (replace this with your logic)
      const seatNumber = Math.floor(Math.random() * 100) + 1;

      // Add passenger details to the array
      passengerDetails.push({
        name: passenger.name,
        age: passenger.age,
        seatNumber: seatNumber
      });
    }

    // Navigate to the booking success page
    this.router.navigate(['/booking-success'], {
      queryParams: {
        trainNumber: this.trainNumber,
        startStation: this.startStation,
        endStation: this.endStation,
        totalPrice:  totalPrice ,
        pnrNumber: pnrNumber,
        
        passengerDetails: JSON.stringify(passengerDetails) // Convert array to JSON string
      }
    });
  }
}
