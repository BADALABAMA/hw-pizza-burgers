import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ProductService } from '../../product.service';
import { IUser } from '../../interface/IUser';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  currentUser: IUser = this.dataService.getCurrentUser();
  userLogin: string = '';

  showModal: string = '';

  showInputs: boolean = false;

  constructor(
    private dataService: DataService,
    private productService: ProductService
  ) {}

  showLogin() {
    this.showModal = 'login';
  }
  setCurrentUser() {
    if (this.currentUser !== undefined) {
      this.currentUser = this.dataService.getCurrentUser();
      console.log(this.currentUser);
    }
  }

  addProduct() {
    const newProduct = {
      category: 'burgers',
      title: ' burger',
      id: 1,
      price: 20,
    };
    this.productService.addNewProduct(newProduct);
    console.log(newProduct);
  }
  showRegister() {
    this.showModal = 'register';
  }
  showInput() {
    this.showInputs = !this.showInputs;
  }

  logOut() {
    this.currentUser = {};
    this.dataService.setCurrentUser(this.currentUser);
  }
}
