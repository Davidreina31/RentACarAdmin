import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllTripsComponent } from './all-trips/all-trips.component';
import { FinishTripComponent } from './finish-trip/finish-trip.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FinalBillComponent } from './final-bill/final-bill.component';
import { DesktopComponent } from './desktop/desktop.component';
import { AddDesktopComponent } from './add-desktop/add-desktop.component';
import { AddCarComponent } from './add-car/add-car.component';

@NgModule({
  declarations: [									
    AppComponent,
      HomeComponent,
      AllTripsComponent,
      FinishTripComponent,
      FinalBillComponent,
      DesktopComponent,
      AddDesktopComponent,
      AddCarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
