import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { IProduct } from '../../interface/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  products: IProduct[] = this.productService.getProducts();
  product?: IProduct = { title: '', category: '', id: 0 };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.params.subscribe((param) => {
      console.log(param, 'PRODUCT');

      const productId = +param['id'];
      this.product = this.productService.getProductById(productId);
      console.log(this.product);
      return this.product;
    });
  }
}
