import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailPageComponent } from './components/car-detail-page/car-detail-page.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarDetailComponent},
  {path:"cars", component:CarDetailComponent},
  {path:"cars/brand/:brandId", component:CarDetailComponent},
  {path:"cars/color/:colorId", component:CarDetailComponent},
  {path:"rentals", component:RentalDetailComponent},
  {path:"cars/car-detail-page/:carId", component:CarDetailPageComponent},
  {path:"car-detail-page/:carId", component:CarDetailPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
