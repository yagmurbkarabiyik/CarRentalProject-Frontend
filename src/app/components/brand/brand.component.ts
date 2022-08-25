import { Brand } from './../../models/brand';
import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands : Brand[] = [];
  // currentBrand?: Brand =null as any;
  currentBrand:Brand | null;
  dataLoaded = false;
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands =  response.data
      this.dataLoaded = true;

    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
      if (brand == this.currentBrand) { 
        return "list-group-item active"
      }
      else{
        return "list-group-item"
      }
  }

  getAllBrandClass(){
    if (!this.currentBrand) {
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  reset(){
      this.currentBrand = null
  }

}
