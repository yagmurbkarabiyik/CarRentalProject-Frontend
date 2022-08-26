import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { CarDetailPageComponent } from './components/car-detail-page/car-detail-page.component';
import { PriceAddPipe } from './pipes/price-add.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CarDetailComponent,
    NaviComponent,
    CarDetailComponent,
    RentalDetailComponent,
    CarDetailPageComponent,
    PriceAddPipe,
    FilterPipe,
    BrandFilterPipe,
    ColorFilterPipe   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
