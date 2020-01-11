import { Injectable } from '@angular/core';

import { Building } from '../models/building';
import { Floor } from '../models/floor';
import { Elevator } from '../models/elevator';
import { User } from '../models/user';

import { FloorService } from './floor.service';
import { ElevatorService } from './elevator.service';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})

export class BuildingService {
    building: Building;

    constructor(
        private floorService: FloorService,
        private elevatorService: ElevatorService,
        private userService: UserService
    ) {
        this.building = new Building({
            id: 1,
            totalFloors: this.floorService.getFloors(),
            elevators: this.elevatorService.getElevators(),
            users: this.userService.getUsers(),
            hasBasement: true
        });

    }

    getBuilding() {
        return this.building;
    }
}
