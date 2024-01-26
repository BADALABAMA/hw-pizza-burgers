import { Injectable } from '@angular/core';
import { IUser } from './interface/IUser';

import { userRole } from './Enum/enum';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private users: IUser[] = [
    {
      login: 'user1',
      password: '123',
      userRole: userRole.ADMIN,
      img: 'assets/ea7a3c32163929.567197ac70bda.png',
    },
    {
      login: 'user2',
      password: '123',
      userRole: userRole.DELIVERY,
      img: 'assets/ea7a3c32163929.567197ac70bda.png',
    },
    {
      login: 'user3',
      password: '123',
      userRole: userRole.MANAGER,
      img: 'assets/ea7a3c32163929.567197ac70bda.png',
    },
  ];

  private currentUser: IUser = {};

  constructor() {}

  public getCurrentUser(): IUser {
    console.log('CURRENT USER ARE GET');
    return this.currentUser;
  }
  public getAllUsers() {
    return this.users;
  }
  public setCurrentUser(user: IUser): IUser {
    this.currentUser = user;
    return this.currentUser;
  }

  public addUser(user: IUser) {
    return this.users.push(user);
  }
}
