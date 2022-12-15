import { Product } from "../const/product.const";

export interface IApp {
    products: Product[],
    errors: string[],
    currentProduct?: Product | undefined
  }
  
  export interface IAppState {
    app: IApp;
  }
  
  export const initialAppState: IApp = {
    products: [],
    errors: [],
  };