import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from 'src/app/models/user';
import { Elevator } from 'src/app/models/elevator';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.sass']
})
export class CommandComponent implements OnInit {

  floorForm: FormGroup;
  currentFloor = 0;
  maxWeight: number;
  maxWeightAlert: boolean;

  @Input() users: User[];
  @Input() elevators: Elevator[];

  constructor(
    private fb: FormBuilder
  ) {
    this.floorForm = this.fb.group({
      floor: ['', [Validators.required, Validators.min(-1), Validators.max(50)]],
      elevatorType: ['', Validators.required],
      passengers: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit() {

    const usersOnBoard = [];
    this.floorForm.value.passengers.forEach( passenger => {
      usersOnBoard.push(this.users.filter( user => user.id  === passenger ));
    });

    this.currentFloor = this.floorForm.get('floor').value;
    this.floorForm.get('floor').reset();
  }

  clearInput() {
    this.floorForm.get('floor').reset();
  }

}
