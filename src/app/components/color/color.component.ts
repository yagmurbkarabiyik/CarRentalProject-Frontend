import { Color } from './../../models/color';
import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[] = [];
  currentColor:Color | null;
  dataLoaded = false;

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
      this.dataLoaded = true;
    })
  }

  setCurrentColor(color:Color){
    this.currentColor = color;
  }

  getCurrentColorClass (color:Color){
      if (color == this.currentColor) {
        return "list-group-item active"
      }
      else{
        return "list-group-item"
      }
  }

  getAllColorClass(){
    if (!this.currentColor) {
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

  reset(){
    this.currentColor = null;

  }
}
