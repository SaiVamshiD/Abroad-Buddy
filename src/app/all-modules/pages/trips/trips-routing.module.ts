import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostTripComponent } from './post-trip/post-trip.component';
import { TripListComponent } from './trip-list/trip-list.component';

const routes: Routes = [
  {path:'', redirectTo:'/trips/post-trip', pathMatch:'full'},
  {path:'post-trip', component:PostTripComponent},
  {path:'listing', component:TripListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripsRoutingModule { }
