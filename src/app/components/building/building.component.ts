import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Floor } from 'src/app/models/floor';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.sass']
})
export class BuildingComponent implements OnInit, OnChanges {

  @Input() floors: Floor[] = [];
  @Input() elevatorsStatus: any;

  passengerElevatorPosition = 0;
  freightElevatorPosition = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.elevatorsStatus.elevatorType === 'Passenger') {
      this.passengerElevatorPosition = this.elevatorsStatus.floor;
    } else if (this.elevatorsStatus.elevatorType === 'Freight') {
      this.freightElevatorPosition = this.elevatorsStatus.floor;
    }
  }
}
