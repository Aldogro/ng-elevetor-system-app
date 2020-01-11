export class User {
    id?: number;
    fullName: string;
    hasKeyCard: boolean;
    weight: number;

    constructor(user: User) {
        if (user.id) {this.id = user.id; }
        this.fullName = user.fullName;
        this.hasKeyCard = user.hasKeyCard;
        this.weight = user.weight;
    }
}
