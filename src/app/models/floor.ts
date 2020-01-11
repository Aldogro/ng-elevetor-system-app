export class Floor {
    id?: number;
    buttonDown?: boolean;
    buttonUp?: boolean;
    needKeyCard ? = false;
    isBasement?: boolean;

    constructor(floor) {
        this.id = floor.id;
        this.buttonDown = floor.buttonDown !== undefined ? floor.buttonDown : true;
        this.buttonUp = floor.buttonUp !== undefined ? floor.buttonUp : true;
        this.needKeyCard = floor.needKeyCard !== undefined ? floor.needKeyCard : false;
        this.isBasement = this.id < 0 ? true : false;
    }
}
