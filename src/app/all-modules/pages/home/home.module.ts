import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FindBuddiesComponent } from './find-buddies/find-buddies.component';
import { BuddiesListComponent } from './buddies-list/buddies-list.component';
import { BuddiesDetailComponent } from './buddies-detail/buddies-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdDetailsComponent } from './ad-details/ad-details.component';


@NgModule({
  declarations: [
    FindBuddiesComponent,
    BuddiesListComponent,
    BuddiesDetailComponent,
    AdDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
