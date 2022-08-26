import { ToastrService } from 'ngx-toastr';
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
  carImages:CarImage[];
  currentImage: CarImage;
  imageUrl = "https://localhost:44303"

  constructor(private carDetailService:CarDetailService, private carImageService:CarImageService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService) { }

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

  getButtonClass(image: CarImage) {
    if ((image === this.carImages[0])) {
      return 'active';
    } else {
      return '';
    }
  }

  getCurrentImageClass(image: CarImage) {
    if (this.carImages[0] == image) {
      return 'carousel-item active';
    } else {
      return 'carousel-item ';
    }
  }

  setCurrentImageClass(image: CarImage) {
    this.currentImage = image;
  }

  getCarImage(carImage:CarImage, carId: number){
    if (carImage.carId == 0) {
      let path = this.imageUrl + "/images/carDefault.png"
      return path;

    }
    else{
      let path = this.imageUrl + carImage.imagePath;
      return path;
    }
  }

}
