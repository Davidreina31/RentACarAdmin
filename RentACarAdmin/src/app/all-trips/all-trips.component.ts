import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Desktop } from '../models/Desktop';
import { Trip } from '../models/Trip';
import { DesktopService } from '../services/desktop.service';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-all-trips',
  templateUrl: './all-trips.component.html',
  styleUrls: ['./all-trips.component.css']
})
export class AllTripsComponent implements OnInit {

  trips: Trip[] = [];
  desktops: Desktop[] = [];

  constructor(private _service: TripService, private _desktopService: DesktopService, private _router: Router) { }

  ngOnInit() {
    this._service.getAll().subscribe(data => {
      this.trips = data;
      this._desktopService.getAll().subscribe(desktopData => {
        this.desktops = desktopData;
        for (let i = 0; i < this.trips.length; i++) {
          for (let j = 0; j < this.desktops.length; j++) {
            if (this.trips[i].desktop_Start_Id == this.desktops[j].desktop_Id) {
              this.trips[i].desktop_Start = this.desktops[j];
            }
            if (this.trips[i].desktop_End_Id == this.desktops[j].desktop_Id) {
              this.trips[i].desktop_End = this.desktops[j];
            }
            if(this.trips[i].desktop_End != null || this.trips[i].desktop_End != undefined){
              this.trips[i].desktopEndSpecified = true;
            }
          }
        }
      })
    })
  }

  finishTrip(id: string){
    this._router.navigateByUrl("trip/" + id);
  }

}
