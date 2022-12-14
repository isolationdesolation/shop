import { createReducer, on, Action } from '@ngrx/store';
import { initialAppState, IApp } from '../app.interface';
import { addToCart, addToCartSuccess, addToCartFail } from '../actions/actions';

export const userFeatureKey = 'AppState';

export const reducer = createReducer(
  initialAppState as IApp,
  on(addToCart, (state) => ({
    ...state,
  })),
  on(addToCartSuccess, (state) => ({
    ...state,
    authenticationMessage: '',
  })),
  on(addToCartFail, (state, { message }) => ({
    ...state,
    authenticationMessage: message,
  }))
);

export function AppReducer(state: IApp, action: Action): IApp {
  return reducer(state as IApp, action as Action);
}