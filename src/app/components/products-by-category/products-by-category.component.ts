import { Component } from '@angular/core';
import { IProduct } from '../../interface/IProduct';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrl: './products-by-category.component.scss',
})
export class ProductsByCategoryComponent {
  productsByCategory: IProduct[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.params.subscribe((param) => {
      console.log(param, 'PRODUCTsBY');

      const category: string = param['category'];
      this.productsByCategory =
        this.productService.getProductByCategory(category);
      return this.productsByCategory;
    });
  }
}
