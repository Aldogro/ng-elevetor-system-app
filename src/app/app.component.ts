import { Component, OnInit } from '@angular/core';

import { UserService } from './services/user.service';
import { ElevatorService } from './services/elevator.service';

import { User } from './models/user';
import { Elevator } from './models/elevator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'elevator-system-app';
  users: User[] = [];
  elevators: Elevator[] = [];

  constructor(
    private userService: UserService,
    private elevatorService: ElevatorService
  ) {
    this.users = this.userService.getUsers();
    this.elevators = this.elevatorService.getElevators();
  }

  ngOnInit() {
  }
}
