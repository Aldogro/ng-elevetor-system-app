import { Injectable } from '@angular/core';
import { Elevator } from '../models/elevator';

@Injectable({
    providedIn: 'root'
})

export class ElevatorService {
    elevators: Elevator[] = [
        new Elevator({
            id: 1,
            type: 'Passenger',
            currentFloor: 0,
            destinationFloor: 0,
            direction: null,
            doorIsOpen: false
        }),
        new Elevator({
            id: 2,
            type: 'Freight',
            currentFloor: 0,
            destinationFloor: 0,
            direction: null,
            doorIsOpen: false
        })
    ];

    constructor() {}

    getElevators() {
        return this.elevators;
    }

    addElevator() {}

    editElevator() {}

    removeElevator() {}
}
