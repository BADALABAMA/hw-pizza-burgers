import { Component } from '@angular/core';
import { IUser } from '../../interface/IUser';
import { DataService } from '../../data.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginName: string = '';
  password: string = '';
  showModal: boolean = false;
  currentUser: IUser | undefined;

  constructor(
    private dataService: DataService,
    private userService: UserService
  ) {}

  login(loginName: string, password: string) {
    this.toggle();
    this.currentUser = this.userService.getByLoginAndPassword(
      loginName,
      password
    );

    if (this.currentUser) {
      this.dataService.setCurrentUser(this.currentUser);
      console.log('[LOGIN_COMP]', this.currentUser);
      console.log(this.dataService.getCurrentUser());
      this.currentUser.isAuthorized = true;
    }
  }

  toggle() {
    this.showModal = !this.showModal;
  }
}
