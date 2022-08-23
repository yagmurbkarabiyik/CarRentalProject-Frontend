import { CarDetailService } from './../../services/car-detail.service';
import { CarDetail } from './../../models/carDetail';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails: CarDetail[] = [];
  dataLoaded = false;

  constructor(private carDetailService:CarDetailService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails(){
      this.carDetailService.getCarDetails().subscribe(response => {
        this.carDetails = response.data;
        this.dataLoaded = true;
      })
  }
}
