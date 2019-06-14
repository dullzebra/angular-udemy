import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent {

  constructor() { }

  newCarName = '';
  newCarYear = 2000;
  @Output() onAddCar = new EventEmitter<{ name: string, year: number }>();

  addCar() {
    this.onAddCar.emit({
      name: this.newCarName,
      year: this.newCarYear
    });
    this.newCarName = '';
    this.newCarYear = 2000;
  }
}
