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

  constructor(private trainService: TrainService) { }

  ngOnInit(): void {
    // Initialize or fetch data for the 'trains' property
    this.trains = this.trainService;
  }
}



