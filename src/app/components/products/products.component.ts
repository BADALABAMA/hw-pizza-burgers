import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { IProduct } from '../../interface/IProduct';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: IProduct[] = this.productService.getProducts();

  constructor(private productService: ProductService) {}
}
