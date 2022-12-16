import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
  selectCurrentProduct,
  selectProducts,
} from '../store/selectors/products.selector';
import { IAppState } from '../store/app.interface';
import  * as actions from '../store/actions/actions';
import { Product, ProductPayload } from '../const/product.const';

@Injectable({
  providedIn: 'root',
})
export class ProductsFacadeService {
  constructor(private store: Store<IAppState>) {}

  loadAllProducts(): void {
    this.store.dispatch(actions.loadAllProducts());
  }

  getAllProducts(): Observable<Product[]> {
    return this.store.pipe(select(selectProducts));
  }

  loadProductById(id: string): void {
    this.store.dispatch(actions.loadProductById({id}));
  }

  getCurrentProduct(): Observable<Product> {
    return this.store.pipe(select(selectCurrentProduct)).pipe(filter(Boolean));
  }

  deleteProduct(id: string): void {
    this.store.dispatch(actions.deleteProductById({id}))
  }

  addProduct(product: ProductPayload): void {
    this.store.dispatch(actions.addProduct({product}))
  }

  updateProduct(id: string, product: ProductPayload): void {
    this.store.dispatch(actions.updateProductById({id, product}))
  }
}
