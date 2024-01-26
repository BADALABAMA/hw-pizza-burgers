import { Injectable } from '@angular/core';
import { IUser } from './interface/IUser';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: IUser[] = this.dataService.getAllUsers();
  constructor(private dataService: DataService) {}

  public getLogin(user: IUser) {
    return this.dataService.getAllUsers().find((u) => {
      u.login === user.login;
    });
  }

  public getByLoginAndPassword(login: string, password: string) {
    return this.users.find(
      (user: IUser) => user.login === login && user.password === password
    );
  }
}
