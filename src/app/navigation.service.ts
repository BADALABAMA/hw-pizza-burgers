import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private showModal: string = '';
  constructor() {}

  public getShowModal(): string {
    return this.showModal;
  }

  public showLogin() {
    this.showModal = 'login';
  }

  public showRegister() {
    this.showModal = 'register';
  }
}
