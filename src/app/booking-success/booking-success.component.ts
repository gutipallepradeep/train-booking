import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.component.html',
  styleUrl: './booking-success.component.css'
})
export class BookingSuccessComponent implements OnInit {
  trainNumber: number = 0;
  startStation: string = '';
  endStation: string = '';
  totalPrice: number = 0;
  pnrNumber: number = 0;
  passengerDetails: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.trainNumber = +queryParams['trainNumber'];
      this.startStation = queryParams['startStation'];
      this.endStation = queryParams['endStation'];
      this.pnrNumber = +queryParams['pnrNumber'];
      // const price = +queryParams['price'];  
      const storedCount = +queryParams['storedCount'];  // Get the storedCount
      // this.totalPrice = price * storedCount;  
      this.totalPrice = +queryParams['totalPrice'];
      this.passengerDetails = JSON.parse(queryParams['passengerDetails']);
    });
  }
}