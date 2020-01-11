import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    users = [
        new User({ fullName: 'Aldo Rojas', hasKeyCard: true, weight: 90, id: 1 }),
        new User({ fullName: 'Tatiana Grimberg', hasKeyCard: true, weight: 50, id: 2 }),
        new User({ fullName: 'Nachito Rojas', hasKeyCard: false, weight: 16, id: 3 }),
        new User({ fullName: 'Maite Rojas', hasKeyCard: false, weight: 12, id: 4 }),
        new User({ fullName: 'Jabba the Hutt', hasKeyCard: true, weight: 1358, id: 5 })
    ];

    constructor() {}

    getUsers() {
        return this.users;
    }

    addUser(user) {
        this.users.push(user);
        console.log('User added!');
        return this.users;
    }

    editUser(id) {}

    removeUser(id) {}
}
