export class Floor {
    id?: number;
    buttonDown ? = false;
    buttonUp ? = false;
    needKeyCard ? = false;
    isBasement?: boolean;

    constructor(floor) {
        this.id = floor.id;
        this.buttonDown = floor.buttonDown;
        this.buttonUp = floor.buttonUp;
        this.needKeyCard = floor.needKeyCard;
        this.isBasement = this.id < 0 ? true : false;
    }
}
