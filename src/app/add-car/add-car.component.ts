import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent {

  constructor() {
  }

  @Output() onAddCar = new EventEmitter<{ name: string, year: number }>();
  @ViewChild('carYearInput', { static: false }) carYearInput: ElementRef;

  addCar(carNameEl: HTMLInputElement) {
    this.onAddCar.emit({
      name: carNameEl.value,
      year: +this.carYearInput.nativeElement.value,
    });
    carNameEl.value = '';
    this.carYearInput.nativeElement.value = '2000';
  }
}
