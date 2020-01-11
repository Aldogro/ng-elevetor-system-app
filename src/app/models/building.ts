import { Floor } from './floor';
import { Elevator } from './elevator';
import { User } from './user';

export class Building {
    id?: number;
    totalFloors?: Floor[];
    elevators?: Elevator[];
    users?: User[];
    hasBasement?: boolean;

    constructor(building) {
        if (building.id) { this.id = building.id; }
        this.totalFloors = building.totalFloors;
        if (building.hasBasement) { this.hasBasement = building.hasBasement; }
        this.elevators = building.elevators;
        this.users = building.users;
    }
}
