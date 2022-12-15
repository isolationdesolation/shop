import { Action, createAction, props } from '@ngrx/store';
import { Product } from 'src/app/const/product.const';

export const LOAD_PRODUCTS = '[Products] load all products';
export const LOAD_PRODUCTS_SUCCESS = '[Products] load all products success';
export const LOAD_PRODUCTS_FAIL = '[Products] load all products fail';

export const LOAD_PRODUCT_BY_ID = '[Product] load product by id';
export const LOAD_PRODUCT_BY_ID_SUCCESS = '[Product] load product by id success';
export const LOAD_PRODUCT_BY_ID_FAIL = '[Product] load product by id fail';

export const loadAllProducts = createAction(LOAD_PRODUCTS);

export const loadAllProductsSuccess = createAction(
  LOAD_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
);

export const loadAllProductsFail = createAction(
  LOAD_PRODUCTS_FAIL,
  props<{ errors: string[] }>()
);

export const loadProductById = createAction(
  LOAD_PRODUCT_BY_ID,
  props<{ id: string }>()
);


export const loadProductByIdSuccess = createAction(
  LOAD_PRODUCT_BY_ID_SUCCESS,
  props<{ product: Product }>()
);

export const loadProductByIdFail = createAction(
  LOAD_PRODUCT_BY_ID_FAIL,
  props<{ errors: string[] }>()
);
