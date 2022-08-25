import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:44303/api/"
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "car/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "car/getcarsbybrand?id=" + brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "car/getcarsbycolor?id=" + colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarById(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "car/getcardetailsbyid?id=" + carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}