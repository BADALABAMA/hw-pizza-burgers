import { Component } from '@angular/core';
import { IProduct } from '../../interface/IProduct';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-category-btn',
  templateUrl: './category-btn.component.html',
  styleUrl: './category-btn.component.scss',
})
export class CategoryBtnComponent {
  private products: IProduct[] = this.productService.getProducts();

  private productsCategories: string[] =
    this.productService.getProductCategories();
  constructor(private productService: ProductService) {}
  public getProducts() {
    return this.products;
  }

  public getProductsCategories() {
    return this.productsCategories;
  }
}
