import { Component } from '@angular/core';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  availableSeats: number = 10; // Example number of available seats
  ticketAmount: number = 516; // Example ticket amount

  bookTicket(): void {
    if (this.availableSeats > 0) {
      // Logic to book the ticket
      this.availableSeats--; // Decrease available seats after booking
      console.log('Ticket booked!');
    } else {
      console.log('No seats available.');
    }
  }
}
