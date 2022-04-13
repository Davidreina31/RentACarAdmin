import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from '../models/Trip';
import { DesktopService } from '../services/desktop.service';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-final-bill',
  templateUrl: './final-bill.component.html',
  styleUrls: ['./final-bill.component.css']
})
export class FinalBillComponent implements OnInit {

  trip: Trip;
  currentTripId: string;

  constructor(private _service: TripService, private _desktopService: DesktopService , private _route: ActivatedRoute) { }

  ngOnInit() {
    this.currentTripId = this._route.snapshot.paramMap.get('id');

    this._service.getById(this.currentTripId).subscribe(data => {
      this.trip = data;
      this._desktopService.getById(this.trip.car.desktop_Id).subscribe(desktopStartData =>  {
        this.trip.desktop_Start = desktopStartData;
        this._desktopService.getById(this.trip.desktop_End_Id).subscribe(desktopEndData =>{
          this.trip.desktop_End = desktopEndData;
        })
        console.log(this.trip);
      })
    })
  }

}
