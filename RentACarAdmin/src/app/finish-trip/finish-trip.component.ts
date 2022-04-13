import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from '../models/Trip';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-finish-trip',
  templateUrl: './finish-trip.component.html',
  styleUrls: ['./finish-trip.component.css']
})
export class FinishTripComponent implements OnInit {

  currentTripId: string;
  currentTrip: Trip;
  form: FormGroup;
  errorMsg: string;
  
  constructor(
    private _service: TripService, 
    private route: ActivatedRoute, 
    private _builder: FormBuilder,
    private _router: Router
    ) { }

  ngOnInit() {
    this.currentTripId = this.route.snapshot.paramMap.get('id');

    this._service.getById(this.currentTripId).subscribe(data => {
      this.currentTrip = data;
    })

    this.form = this._builder.group({
      kmEnd: ['', Validators.required]
    })
  }

  finishTrip(){
    if(this.form.valid){
      this.currentTrip.car.km_End = this.form.controls['kmEnd'].value;
      console.log(this.currentTrip);

      this._service.update(this.currentTripId, this.currentTrip).subscribe({
        next: () => this._router.navigateByUrl("final-bill/" + this.currentTripId),
        error: (error) => {
          this.errorMsg = error.error;
          console.log(error);
        }
      })
    }
  }
}
