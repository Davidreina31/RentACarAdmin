import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/Car';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  car: Car;
  form: FormGroup;
  desktopId: string;

  constructor(
    private _carService: CarService,
    private _router: Router,
    private _builder: FormBuilder,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.desktopId = this._route.snapshot.paramMap.get('id');

    this.form = this._builder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required],
      kmStart: ['', Validators.required],
      imageUrl: ['', Validators.required]
    })
  }

  addCar(){
    if(this.form.valid){
      this.car = new Car();
      this.car.brand = this.form.controls['brand'].value;
      this.car.model = this.form.controls['model'].value;
      this.car.type = this.form.controls['type'].value;
      this.car.price = this.form.controls['price'].value;
      this.car.km_Start = this.form.controls['kmStart'].value;
      this.car.imageUrl = this.form.controls['imageUrl'].value;
      this.car.desktop_Id = this.desktopId;
      console.log(this.car);

      this._carService.create(this.car).subscribe({
        next: () => this._router.navigateByUrl("/desktop/" + this.desktopId)
      })
    }
  }

  previousPage(){
    this._router.navigateByUrl("/desktop/" + this.desktopId);
  }

}
