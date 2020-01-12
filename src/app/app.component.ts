import { Component, OnInit } from '@angular/core';

import { UserService } from './services/user.service';
import { ElevatorService } from './services/elevator.service';
import { FloorService } from './services/floor.service';

import { User } from './models/user';
import { Elevator } from './models/elevator';
import { Floor } from './models/floor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'elevator-system-app';
  users: User[] = [];
  elevators: Elevator[] = [];
  floors: Floor[] = [];

  constructor(
    private userService: UserService,
    private elevatorService: ElevatorService,
    private floorService: FloorService
  ) {
    this.users = this.userService.getUsers();
    this.elevators = this.elevatorService.getElevators();
    this.floors = this.floorService.getFloors();
  }

  ngOnInit() {
  }
}
