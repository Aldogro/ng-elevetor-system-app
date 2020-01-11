import { User } from './user';

export class Elevator {
    id?: number;
    type: 'Freight' | 'Passenger';
    isMoving?: boolean;
    currentFloor: number;
    destinationFloor: number;
    direction?: 'Going Up' | 'Going Down' | null;
    doorIsOpen ? = false;
    keyCardReader?: boolean;
    maxWeightCapacityLimit?: number;
    maxWeightCapacityLimitExceeded?: boolean;
    shutOff ? = false;

    constructor(elevator: Elevator) {
        if (elevator.id) { this.id = elevator.id; }
        this.type = elevator.type;
        if (elevator.isMoving) { this.isMoving = elevator.isMoving; }
        this.currentFloor = elevator.currentFloor;
        this.destinationFloor = elevator.destinationFloor;
        if (this.currentFloor < this.destinationFloor && this.destinationFloor > -1) {
            this.direction = 'Going Up';
        } else if (this.currentFloor === this.destinationFloor) {
            this.direction = null;
        } else {
            this.direction = 'Going Down';
        }
        this.isMoving = this.direction !== null ? false : true;
        if (elevator.doorIsOpen) { this.doorIsOpen = elevator.doorIsOpen; }
        this.keyCardReader = this.type === 'Freight' ? false : true;
        this.maxWeightCapacityLimit = this.type === 'Freight' ? 3000 : 1000;
    }
}
