import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/data-access/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {
  productId: string;
  productData$: Observable<any>;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
    this.productId = this.route.snapshot.params['productId'];
  }

  ngOnInit(): void {
    console.log(this.productId)
    this.productData$ = this.productsService.getProductById(this.productId)
  }

}
