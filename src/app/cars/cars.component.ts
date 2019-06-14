import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  inputValue = 'default';


  cars: { name: string, year: number }[] = [
    {
      name: 'Ford', year: 2017
    },
    {
      name: 'Audi', year: 2015
    }
  ];


  onKeyUp(value: string) {
    this.inputValue = value;
  }

  updateCarList(newCar: { name: string, year: number }) {
    this.cars.push(newCar);
  }
}
