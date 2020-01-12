import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from 'src/app/models/user';
import { Elevator } from 'src/app/models/elevator';
import { Floor } from 'src/app/models/floor';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.sass']
})
export class CommandComponent implements OnInit, OnChanges {

  floorForm: FormGroup;
  currentFloor = 0;
  passengersWeight: number;
  maxWeight: number;
  maxWeightAlert: boolean;
  elevatorStatus: any;

  @Input() users: User[];
  @Input() elevators: Elevator[];
  @Input() floors: Floor[];

  constructor(
    private fb: FormBuilder
  ) {
    this.floorForm = this.fb.group({
      floor: ['', Validators.required],
      elevatorType: ['', Validators.required],
      passengers: ['', Validators.required],
      passengersWeight: ['', Validators.max(this.maxWeight)],
      weightLimit: [false, [Validators.required]],
      keyCardNeeded: [false]
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  getElevatorMaxWeight(event) {
    const selectedElevator = this.elevators.filter( elevator => elevator.type === event.target.value );
    this.maxWeight = selectedElevator[0].maxWeightCapacityLimit;
    this.keyCardNeeded();
    this.setWeightAlert();
  }

  getPassengersWeight() {
    this.keyCardNeeded();
    const passengersWeightOnBoard = [];
    let passengersWeight = 0;
    this.floorForm.get('passengers').value.forEach( passenger => {
      const passengerWeight = this.users.filter( user => user.id === passenger);
      passengersWeightOnBoard.push(passengerWeight[0].weight);
    });
    passengersWeightOnBoard.forEach( passengerWeight => passengersWeight += passengerWeight);
    this.floorForm.get('passengersWeight').patchValue(passengersWeight);
    this.setWeightAlert();
  }

  setWeightAlert() {
    if ( this.floorForm.get('passengersWeight').value > this.maxWeight ) {
      this.floorForm.get('weightLimit').setValue(true);
    } else {
      this.floorForm.get('weightLimit').setValue(false);
    }
  }

  keyCardNeeded() {
    // tslint:disable-next-line:max-line-length
    if ((this.floorForm.value.floor === -1 || this.floorForm.value.floor === this.floors.length - 2) && this.floorForm.value.elevatorType === 'Passenger') {
      if (this.hasKeyCard(this.passengersOnBoard())) {
        this.floorForm.get('keyCardNeeded').setValue(false);
      } else {
        this.floorForm.get('keyCardNeeded').setValue(true);
      }
    } else {
      this.floorForm.get('keyCardNeeded').setValue(false);
    }
  }

  hasKeyCard(passengers) {
    if ( passengers.filter( passenger => passenger.hasKeyCard).length > 0 ) {
      return true;
    } else {
      return false;
    }
  }

  passengersOnBoard() {
    const passengersOnBoard = [];
    this.floorForm.value.passengers.forEach( passenger => {
      passengersOnBoard.push(this.users.filter( user => user.id  === passenger )[0]);
    });
    return passengersOnBoard;
  }

  onSubmit() {
    this.passengersOnBoard();
    this.currentFloor = this.floorForm.get('floor').value;
    this.elevatorStatus = this.floorForm.value;
    this.floorForm.reset();
  }

  clearInput() {
    this.floorForm.reset();
    this.floorForm.get('keyCardNeeded').setValue(false);
  }
}
