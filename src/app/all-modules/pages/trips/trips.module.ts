import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripsRoutingModule } from './trips-routing.module';
import { PostTripComponent } from './post-trip/post-trip.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TripListComponent } from './trip-list/trip-list.component';


@NgModule({
  declarations: [
    PostTripComponent,
    TripListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TripsRoutingModule
  ]
})
export class TripsModule { }
