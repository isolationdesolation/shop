import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { Product } from 'src/app/const/product.const';
import { ProductsFacadeService } from 'src/app/data-access/products.facade.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productsService: ProductsFacadeService) {
    this.productsService.loadAllProducts();
  }

  ngOnInit(): void {
    this.products$ = this.productsService
      .getAllProducts()
      .pipe(filter(Boolean));
  }
}
