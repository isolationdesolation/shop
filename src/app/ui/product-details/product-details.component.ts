import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/const/product.const';
import { ProductsFacadeService } from 'src/app/data-access/products.facade.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {
  productId: string;
  productData$: Observable<Product>;

  constructor(private route: ActivatedRoute, private router: Router, private productsService: ProductsFacadeService) {
    this.productId = this.route.snapshot.params['productId'];
  }

  ngOnInit(): void {
    this.productsService.loadProductById(this.productId)
    this.productData$ = this.productsService.getCurrentProduct()
  }

  onDeleteClick(): void {
    this.productsService.deleteProduct(this.productId);
  }

  backToListing(): void {
    this.router.navigateByUrl(``)
  }

}
