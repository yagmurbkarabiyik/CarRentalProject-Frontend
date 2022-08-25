import { CarDetail } from './../../models/carDetail';
import { ActivatedRoute } from '@angular/router';
import { CarDetailService } from './../../services/car-detail.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarImage } from 'src/app/models/carImage';

@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css']
})
export class CarDetailPageComponent implements OnInit {

  carDetails:CarDetail[] = [];
  carImages:CarImage[] = [];
  imageUrl = "https://localhost:44303"
  constructor(private carDetailService:CarDetailService, private carImageService:CarImageService, private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCarById(params["carId"])
      this.getImageByCarId(params["carId"])
    })
  }

  getCarById(carId:number){
    this.carDetailService.getCarById(carId).subscribe(response => {
      this.carDetails = response.data;
    })
  }

  getImageByCarId(carId:number){
    this.carImageService.getByCarId(carId).subscribe(response => {
      this.carImages = response.data;
    })
  }
}
