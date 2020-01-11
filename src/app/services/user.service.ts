import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    users = [
        new User('Aldo Rojas', true, 90, 1),
        new User('Tatiana Grimberg', true, 50, 2),
        new User('Nachito Rojas', false, 16, 3),
        new User('Maite Rojas', false, 12, 4),
        new User('Jabba the Hutt', true, 1358, 5)
    ];

    constructor() {}

    getUsers() {
        return this.users;
    }
}
