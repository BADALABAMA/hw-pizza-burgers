import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsByCategoryComponent } from './components/products-by-category/products-by-category.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/:category', component: ProductsByCategoryComponent },
  { path: 'products/:category/:id', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
