import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainService } from '../train.service';
@Component({
  selector: 'app-adminshowtickets',
  templateUrl: './adminshowtickets.component.html',
  styleUrl: './adminshowtickets.component.css'
})
export class AdminshowticketsComponent implements OnInit {
  userEmail: string | null = '';
  tickets: any[] = [];

  constructor(private route: ActivatedRoute, private trainService: TrainService) {}

  ngOnInit(): void {
    // Use paramMap to get the user email from route parameters
    this.userEmail = this.route.snapshot.paramMap.get('userEmail');
    console.log(this.userEmail);

    if (this.userEmail) {
      this.trainService.getTicketsByEmail(this.userEmail).subscribe(
        (data) => {
          this.tickets = data;
        },
        (error) => {
          console.error('Error fetching ticket data:', error);
        }
      );
    }
  }
  cancelTicket(passengerId: number): void {
    // Call the TrainService to cancel the ticket
    this.trainService.cancelTicket(passengerId).subscribe(
      () => {
        // Remove the canceled ticket from the local list
        this.tickets = this.tickets.filter(passenger => passenger.id !== passengerId);
        console.log('Ticket canceled successfully.');
      },
      (error) => {
        console.error('Error canceling ticket:', error);
      }
    );
  }
}