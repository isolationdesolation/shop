import { createReducer, on } from '@ngrx/store';
import { initialAppState, IApp } from '../app.interface';
import  * as actions from '../actions/actions';

export const userFeatureKey = 'AppState';

export const appReducer = createReducer(
  initialAppState as IApp,
  on(actions.loadAllProducts, (state) => ({ ...state })),
  on(actions.loadProductById, (state) => ({ ...state })),
  on(actions.loadAllProductsSuccess, (state, { products }) => ({ ...state, products: products })),
  on(actions.loadProductByIdSuccess, (state, { product }) => ({ ...state, currentProduct: product })),
  on(actions.loadAllProductsFail, (state, { errors }) => ({
    ...state,
    errors: errors,
  })),
  on(actions.loadProductByIdFail, (state, { errors }) => ({ ...state, errors: errors })),
  on(actions.addProduct, (state) => ({...state})),
  on(actions.addProductSuccess, (state, { product }) => ({ ...state, addedProduct: product })),
  on(actions.addProductFail, (state, { errors }) => ({ ...state, errors: errors })),
  on(actions.updateProductById, (state) => ({...state})),
  on(actions.updateProductByIdSuccess, (state, { product }) => ({ ...state, currentProduct: product })),
  on(actions.updateProductByIdFail, (state, { errors }) => ({ ...state, errors: errors })),
  on(actions.deleteProductById, (state) => ({...state})),
  on(actions.deleteProductByIdSuccess, (state, { product }) => ({ ...state, lastRemovedProduct: product })),
  on(actions.deleteProductByIdFail, (state, { errors }) => ({ ...state, errors: errors })),
);
