import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[CART] add to cart Action',
  props<{ usernamae: string; password: string }>()
);

export const addToCartSuccess = createAction(
  '[CART] add to cart Success Action'
);

export const addToCartFail = createAction(
  '[CART] add to cart Fail Action',
  props<{ message: string }>()
);