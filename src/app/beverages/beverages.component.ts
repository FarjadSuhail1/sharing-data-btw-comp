import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {
  
  @Input() beverage = "tea";
  @Output() newBeverageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addnewBeverage(value: string){
    this.newBeverageEvent.emit(value);
    this.clearInput();
  }

  clearInput(){
    let input = <HTMLInputElement>document.getElementById('beverage-input');
    input.value = '';
  }
}
