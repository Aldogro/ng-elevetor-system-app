import { Floor } from '../models/floor';

export let commonFloors = [];

commonFloors.push( new Floor( {id: -1, needKeyCard: true, buttonDown: false} ) );

for (let i = 0; i < 50; i++) {
    commonFloors.push( new Floor( {id: i} ) );
}
commonFloors[commonFloors.length - 1].needKeyCard = true;
