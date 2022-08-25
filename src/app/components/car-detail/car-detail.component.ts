import { ActivatedRoute } from '@angular/router';
import { CarDetailService } from './../../services/car-detail.service';
import { CarDetail } from './../../models/carDetail';
import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails: CarDetail[] = [];
  dataLoaded = false;
  imageUrl = "https://localhost:44303"
  currentCar:CarDetail


  constructor(private carDetailService:CarDetailService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"] ){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCarDetails();
      }
    });
  }

  getCarDetails(){
      this.carDetailService.getCarDetails().subscribe(response => {
        this.carDetails = response.data;
        this.dataLoaded = true;
      })
  }

  getCarsByBrand(brandId:number){
    this.carDetailService.getCarByBrand(brandId).subscribe(response => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsByColor(colorId:number) {
    this.carDetailService.getCarByColor(colorId).subscribe(response => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
  }

  setCurrentCarDetail(car:CarDetail){
    this.currentCar = car;
  }
}
