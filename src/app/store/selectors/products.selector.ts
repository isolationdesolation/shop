import { createSelector } from '@ngrx/store';
import { Product } from 'src/app/const/product.const';
import { IAppState } from '../app.interface';

export const selectProducts = (state: IAppState) => state.app.products;

export const selectCurrentProduct = (state: IAppState) =>
  state.app.currentProduct;

export const selectProductById = (id: string) =>
  createSelector(selectProducts, (products) =>
    products.find((product: Product) => product.id === id)
  );
