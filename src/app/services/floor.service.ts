import { Injectable } from '@angular/core';
import { Floor } from '../models/floor';
import { commonFloors } from '../services/floors.array';

@Injectable({
    providedIn: 'root'
})

export class FloorService {
    floors: Floor[] = [];

    constructor() {
        this.floors = commonFloors;
    }

    getFloors() {
        return this.floors;
    }

    addFloor() {}

    editFloor() {}

    removeFloor() {}
}
