import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from '../models/Country';
import { Desktop } from '../models/Desktop';
import { CountryService } from '../services/country.service';
import { DesktopService } from '../services/desktop.service';

@Component({
  selector: 'app-add-desktop',
  templateUrl: './add-desktop.component.html',
  styleUrls: ['./add-desktop.component.scss']
})
export class AddDesktopComponent implements OnInit {

  countries: Country[] = [];
  desktop: Desktop;
  form: FormGroup;
  errorMsg: string;

  constructor(
    private _countryService: CountryService,
    private _desktopService: DesktopService,
    private _router: Router,
    private _builder: FormBuilder
  ) { }

  ngOnInit() {
    this._countryService.getAll().subscribe(data => {
      this.countries = data;
    })

    this.form = this._builder.group({
      city: ['', Validators.required],
      imageUrl: ['', Validators.required],
      country: ['']
    })
  }

  addDesktop(){
    if(this.form.valid){
      this.desktop = new Desktop();
      this.desktop.city = this.form.controls['city'].value;
      this.desktop.imageUrl = this.form.controls['imageUrl'].value;
      this.desktop.country_Id = this.form.controls['country'].value;
      this._countryService.getById(this.desktop.country_Id).subscribe(data => {
        this.desktop.country = data;
      })
      console.log(this.desktop);
      this._desktopService.create(this.desktop).subscribe({
        next: () => this._router.navigateByUrl("/home"),
        error: (error) => {
          this.errorMsg = error.error;
          console.log(error);
        }
      })
    }
  }

  previousPage(){
    this._router.navigateByUrl("/home");
  }

}
