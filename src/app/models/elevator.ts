export class Elevator {
    id?: number;
    type: 'Freight' | 'Passenger';
    isMoving ?: boolean;
    currentFloor: number;
    destinationFloor: number;
    direction: 'Going Up' | 'Going Down';
    doorIsOpen ? = false;
    keyCardReader = this.type === 'Freight' ? false : true;
    maxWeightCapacityLimit = this.type === 'Freight' ? 3000 : 1000;

    constructor(elevator) {
        if (elevator.id) { this.id = elevator.id; }
        this.type = elevator.type;
        if (elevator.isMoving) { this.isMoving = elevator.isMoving; }
        this.currentFloor = elevator.currentFloor;
        this.destinationFloor = elevator.destinationFloor;
        if (this.currentFloor < this.destinationFloor && this.destinationFloor > -1) {
            this.direction = 'Going Up';
        } else {
            this.direction = 'Going Down';
        }
        if (elevator.doorIsOpen) { this.doorIsOpen = elevator.doorIsOpen; }
    }
}
