import {
  Component, Input, ContentChild, ElementRef,
  OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

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
export class CarComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }
  ngAfterViewChecked(): void {
    // throw new Error("Method not implemented.");
  }
  ngDoCheck(): void {
    //throw new Error("Method not implemented.");
  }
  ngAfterContentInit(): void {
    // throw new Error("Method not implemented.");
  }
  ngAfterContentChecked(): void {
    // throw new Error("Method not implemented.");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchanges', changes)
  }
  constructor() {
    console.log('construnctor')
  }
  ngOnInit(): void {
    console.log('oninit')
  }

  @Input('carItem') car: { name: string, year: number };
  @ContentChild('alert', { static: false }) alert: ElementRef;

  ngAfterViewInit() {
    console.log(this.alert)
  }
}
