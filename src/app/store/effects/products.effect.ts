import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductsHttpService } from 'src/app/data-access/products.http.service';
import {
  loadAllProducts,
  loadAllProductsFail,
  loadAllProductsSuccess,
  loadProductById,
  loadProductByIdFail,
  loadProductByIdSuccess,
} from '../actions/actions';

@Injectable()
export class ProductEffects {
  loadProducts$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAllProducts),
      mergeMap(() =>
        this.productsService.getAllProducts().pipe(
          map((products) => {
            return loadAllProductsSuccess({products});
          }),
          catchError(() => of(loadAllProductsFail({ errors: ['products not loaded'] })))
        )
      )
    );
  });


  loadProduct$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProductById),
      map((action) => action.id),
      mergeMap((id) =>
        this.productsService.getProductById(id).pipe(
          map((product) => {

            return loadProductByIdSuccess({product});
          }),
          catchError(() => of(loadProductByIdFail({ errors: ['product not loaded'] })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private productsService: ProductsHttpService
  ) {}
}
