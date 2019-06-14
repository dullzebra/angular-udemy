import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  /*  template: `
     <h4>I am car</h4>
   `, */
  // styleUrls: ['./car.component.scss']
  styles: [`
    h4 {
      color: maroon
    }
  `]
})
export class CarComponent {
  @Input('carItem') car: { name: string, year: number };
}
