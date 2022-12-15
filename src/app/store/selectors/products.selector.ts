import { IAppState } from "../app.interface";

export const selectProducts = (state: IAppState) => state.app.products;

export const selectCurrentProduct = (state: IAppState) => state.app.currentProduct;
