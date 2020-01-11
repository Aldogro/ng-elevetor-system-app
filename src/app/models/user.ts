export class User {
    id?: number;
    fullName: string;
    hasKeyCard: boolean;
    weight: number;

    constructor(fullName: string, hasKeyCard: boolean, weight: number, id?: number) {
        if (id) {this.id = id; }
        this.fullName = fullName;
        this.hasKeyCard = hasKeyCard;
        this.weight = weight;
    }
}
