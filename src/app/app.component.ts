import { Component } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'elevator-system-app';
  users: User[];

  constructor(
    private userService: UserService
  ) {
    this.users = this.userService.getUsers();
    console.log(this.users);
  }
}
