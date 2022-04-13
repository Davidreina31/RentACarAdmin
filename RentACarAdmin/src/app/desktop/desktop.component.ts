import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/Car';
import { Desktop } from '../models/Desktop';
import { CarService } from '../services/car.service';
import { DesktopService } from '../services/desktop.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  items: Car[] = [];
  desktopId: string;
  desktop: Desktop;
  errorMsg: string;

  constructor(private _service: CarService, private _desktopService: DesktopService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.desktopId = this._route.snapshot.paramMap.get('id');

    this._service.getAllForDesktop(this.desktopId).subscribe(data => {
      this.items = data;
    })

    this._desktopService.getById(this.desktopId).subscribe(data => {
      this.desktop = data;
    })
  }

  goToHomePage(){
    this._router.navigateByUrl("/home");
  }

  deleteCar(id: string){
    this._service.delete(id).subscribe({
      next: () => this.loadData(),
      error: (error) => {
        this.errorMsg = error.error,
        console.log(error)
      }
    })
  }

}
