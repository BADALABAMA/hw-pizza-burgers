import { Component, Input } from '@angular/core';
import { UserService } from '../../user.service';
import { IUser } from '../../interface/IUser';
import { DataService } from '../../data.service';
import { userRole } from '../../Enum/enum';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  constructor(
    private userService: UserService,
    private dataService: DataService
  ) {}

  users: IUser[] = this.dataService.getAllUsers();
  login: string = '';
  password: string = '';

  showModal: boolean = false;

  toggle() {
    this.showModal = !this.showModal;
  }
  registerNewUser(login: string, password: string) {
    if (login !== '' && password !== '') {
      const user = {
        login: login,
        password: password,
        userRole: userRole.USER,
        img: 'assets/ea7a3c32163929.567197ac70bda.png',
        isAuthorized: true,
      };
      this.dataService.setCurrentUser(user);
      this.dataService.addUser(user);
      console.log(this.dataService.getAllUsers());
      this.toggle();
    }
  }
}
