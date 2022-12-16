import { createAction, props } from '@ngrx/store';
import { Product, ProductPayload } from 'src/app/const/product.const';

export const LOAD_PRODUCTS = '[Products] load all products';
export const LOAD_PRODUCTS_SUCCESS = '[Products] load all products success';
export const LOAD_PRODUCTS_FAIL = '[Products] load all products fail';

export const LOAD_PRODUCT_BY_ID = '[Product] load product by id';
export const LOAD_PRODUCT_BY_ID_SUCCESS =
  '[Product] load product by id success';
export const LOAD_PRODUCT_BY_ID_FAIL = '[Product] load product by id fail';

export const UPDATE_PRODUCT_BY_ID = '[Product] update product by id';
export const UPDATE_PRODUCT_BY_ID_SUCCESS =
  '[Product] update product by id success';
export const UPDATE_PRODUCT_BY_ID_FAIL = '[Product] update product by id fail';

export const DELETE_PRODUCT_BY_ID = '[Product] delete product by id';
export const DELETE_PRODUCT_BY_ID_SUCCESS =
  '[Product] delete product by id success';
export const DELETE_PRODUCT_BY_ID_FAIL = '[Product] delete product by id fail';

export const ADD_PRODUCT = '[Product] add product';
export const ADD_PRODUCT_SUCCESS = '[Product] add product success';
export const ADD_PRODUCT_FAIL = '[Product] add product fail';

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

export const deleteProductById = createAction(
  DELETE_PRODUCT_BY_ID,
  props<{ id: string }>()
);

export const deleteProductByIdSuccess = createAction(
  DELETE_PRODUCT_BY_ID_SUCCESS,
  props<{ product: Product }>()
);

export const deleteProductByIdFail = createAction(
  DELETE_PRODUCT_BY_ID_FAIL,
  props<{ errors: string[] }>()
);

export const updateProductById = createAction(
  UPDATE_PRODUCT_BY_ID,
  props<{ id: string; product: ProductPayload }>()
);

export const updateProductByIdSuccess = createAction(
  UPDATE_PRODUCT_BY_ID_SUCCESS,
  props<{ product: Product }>()
);

export const updateProductByIdFail = createAction(
  UPDATE_PRODUCT_BY_ID_FAIL,
  props<{ errors: string[] }>()
);

export const addProduct = createAction(
  ADD_PRODUCT,
  props<{ product: ProductPayload }>()
);

export const addProductSuccess = createAction(
  ADD_PRODUCT_SUCCESS,
  props<{ product: Product }>()
);

export const addProductFail = createAction(
  ADD_PRODUCT_FAIL,
  props<{ errors: string[] }>()
);
