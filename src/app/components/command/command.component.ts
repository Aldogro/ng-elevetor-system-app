import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from 'src/app/models/user';
import { Elevator } from 'src/app/models/elevator';

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

  @Input() users: User[];
  @Input() elevators: Elevator[];

  constructor(
    private fb: FormBuilder
  ) {
    this.floorForm = this.fb.group({
      floor: ['', [Validators.required, Validators.min(-1), Validators.max(49)]],
      elevatorType: ['', Validators.required],
      passengers: [''],
      passengersWeight: ['', Validators.max(this.maxWeight)],
      weightLimit: [false, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  getElevatorMaxWeight(event) {
    const selectedElevator = this.elevators.filter( elevator => elevator.type === event.target.value );
    this.maxWeight = selectedElevator[0].maxWeightCapacityLimit;
    this.setWeightAlert();
  }

  getPassengersWeight(event) {
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

  onSubmit() {
    const usersOnBoard = [];
    this.floorForm.value.passengers.forEach( passenger => {
      usersOnBoard.push(this.users.filter( user => user.id  === passenger ));
    });
    this.currentFloor = this.floorForm.get('floor').value;
    this.floorForm.get('floor').reset();
    console.log(this.floorForm.controls);
  }

  clearInput() {
    console.log(this.floorForm.value);
  }

}
