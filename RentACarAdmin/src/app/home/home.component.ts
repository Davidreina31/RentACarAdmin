import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Desktop } from '../models/Desktop';
import { Trip } from '../models/Trip';
import { DesktopService } from '../services/desktop.service';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  desktops: Desktop[] = [];
  trips: Trip [] = [];

  constructor(private _desktopService: DesktopService, private _tripService: TripService, private _router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this._desktopService.getAll().subscribe(data => {
      this.desktops = data;
    })

    this._tripService.getAll().subscribe(data => {
      this.trips = data;
    })
  }

  goToAllTrips(){
    this._router.navigateByUrl("/trips");
  }

}
