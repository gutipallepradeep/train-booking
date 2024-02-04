import { Component,OnInit } from '@angular/core';
import { TrainService } from '../train.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-showtickets',
  templateUrl: './showtickets.component.html',
  styleUrl: './showtickets.component.css'
})
export class ShowticketsComponent implements OnInit {
  userEmail: string | null = '';
  

  // Table data for displaying passengers
  passengers: any[] = [];

  constructor(private route: ActivatedRoute, private trainService:TrainService) { }

  ngOnInit(): void {
    // Retrieve user email from ActivatedRoute
    this.userEmail = this.route.snapshot.queryParamMap.get('userEmail'); // Change this line
    console.log(this.userEmail);
    // Fetch passenger data based on user email
    if (this.userEmail) {
      this.trainService.getPassengersByEmail(this.userEmail).subscribe(
        (data) => {
          this.passengers = data;
        },
        (error) => {
          console.error('Error fetching passenger data:', error);
        }
      );
    }
  }
  cancelTicket(passengerId: number): void {
    // Call the TrainService to cancel the ticket
    this.trainService.cancelTicket(passengerId).subscribe(
      () => {
        // Remove the canceled ticket from the local list
        this.passengers = this.passengers.filter(passenger => passenger.id !== passengerId);
        console.log('Ticket canceled successfully.');
      },
      (error) => {
        console.error('Error canceling ticket:', error);
      }
    );
  }
}
