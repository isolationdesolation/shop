import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductsHttpService } from 'src/app/data-access/products.http.service';
import { ModalService } from 'src/app/ui/product-actions-modal/product-actions.modal.service';
// import { ModalService } from 'src/app/ui/product-actions-modal/product-actions.service';
import * as actions from '../actions/actions';

@Injectable()
export class ProductEffects {
  loadProducts$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.loadAllProducts),
      mergeMap(() =>
        this.productsService.getAllProducts().pipe(
          map((products) => {
            return actions.loadAllProductsSuccess({ products });
          }),
          catchError(() =>
            of(actions.loadAllProductsFail({ errors: ['products not loaded'] }))
          )
        )
      )
    );
  });

  loadProductById$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.loadProductById),
      map((action) => action.id),
      mergeMap((id) =>
        this.productsService.getProductById(id).pipe(
          map((product) => {
            return actions.loadProductByIdSuccess({ product });
          }),
          catchError(() =>
            of(actions.loadProductByIdFail({ errors: ['product not loaded'] }))
          )
        )
      )
    );
  });

  addProduct$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.addProduct),
      map((action) => action.product),
      mergeMap((product) =>
        this.productsService.addProduct(product).pipe(
          map((product) => {
            return actions.addProductSuccess({ product });
          }),
          catchError(() =>
            of(actions.addProductFail({ errors: ['product not added'] }))
          )
        )
      )
    );
  });

  onAddSuccess$: Observable<void> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.addProductSuccess),
        map((action) => action.product),
        map((product) =>
          this.modalService.openDialogWithProduct(
            `Product ${product.title} was added`
          )
        )
      ),
    { dispatch: false }
  );

  onDeleteByIdSuccess$: Observable<void> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.deleteProductByIdSuccess),
        map((action) => action.product),
        map((product) =>
          this.modalService.openDialogWithProduct(
            `Product ${product.title} was deleted`
          )
        )
      ),
    { dispatch: false }
  );

  onUpdateSuccess$: Observable<void> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.updateProductByIdSuccess),
        map((action) => action.product),
        map((product) =>
          this.modalService.openDialogWithProduct(
            `Product ${product.title} was updated`
          )
        )
      ),
    { dispatch: false }
  );

  updateProduct$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.updateProductById),
      map((action) => ({ id: action.id, product: action.product })),
      mergeMap((productData) =>
        this.productsService
          .updateProduct(productData.id, productData.product)
          .pipe(
            map((product) => {
              return actions.updateProductByIdSuccess({ product });
            }),
            catchError(() =>
              of(
                actions.updateProductByIdFail({
                  errors: ['product was not updated'],
                })
              )
            )
          )
      )
    );
  });

  deleteProduct$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.deleteProductById),
      map((action) => action.id),
      mergeMap((id) =>
        this.productsService.deleteProduct(id).pipe(
          map((product) => {
            return actions.deleteProductByIdSuccess({ product });
          }),
          catchError(() =>
            of(
              actions.deleteProductByIdFail({
                errors: ['product was not deleted'],
              })
            )
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private productsService: ProductsHttpService,
    private modalService: ModalService
  ) {}
}
