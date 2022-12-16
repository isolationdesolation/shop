import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './ui/add-product/add-product.component';
import { ProductDetailsComponent } from './ui/product-details/product-details.component';
import { ProductListComponent } from './ui/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:productId', component: ProductDetailsComponent },
  { path: 'add-product', component: AddProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
