import { createReducer, on } from '@ngrx/store';
import { initialAppState, IApp } from '../app.interface';
import {
  loadAllProducts,
  loadAllProductsFail,
  loadAllProductsSuccess,
  loadProductById,
  loadProductByIdFail,
  loadProductByIdSuccess,
} from '../actions/actions';

export const userFeatureKey = 'AppState';

export const appReducer = createReducer(
  initialAppState as IApp,
  on(loadAllProducts, (state) => {
    return { ...state };
  }),
  on(loadProductById, (state) => {
    return { ...state };
  }),
  on(loadAllProductsSuccess, (state, { products }) => {
    return { ...state, products: products };
  }),
  on(loadProductByIdSuccess, (state, { product }) => {
    return { ...state, currentProduct: product };
  }),
  on(loadAllProductsFail, (state, { errors }) => ({
    ...state,
    errors: errors,
  })),
  on(loadProductByIdFail, (state, { errors }) => {
    return { ...state, errors: errors };
  })
);
