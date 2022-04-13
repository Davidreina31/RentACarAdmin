import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDesktopComponent } from './add-desktop/add-desktop.component';
import { AllTripsComponent } from './all-trips/all-trips.component';
import { DesktopComponent } from './desktop/desktop.component';
import { FinalBillComponent } from './final-bill/final-bill.component';
import { FinishTripComponent } from './finish-trip/finish-trip.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "trips",
    component: AllTripsComponent
  },
  {
    path: "trip/:id",
    component: FinishTripComponent
  },
  {
    path: "final-bill/:id",
    component: FinalBillComponent
  },
  {
    path: "desktop/:id",
    component: DesktopComponent
  },
  {
    path: "new-desktop",
    component: AddDesktopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
