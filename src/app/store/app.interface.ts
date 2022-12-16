import { Product } from "../const/product.const";

export interface IApp {
    products: Product[],
    errors: string[],
    currentProduct?: Product,
    addedProduct?: Product,
    lastRemovedProduct?: Product,
  }
  
  export interface IAppState {
    app: IApp;
  }
  
  export const initialAppState: IApp = {
    products: [],
    errors: [],
  };