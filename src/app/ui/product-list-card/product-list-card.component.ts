import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/const/product.const';

@Component({
  selector: 'app-product-list-card',
  templateUrl: './product-list-card.component.html',
  styleUrls: ['./product-list-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListCardComponent {
  @Input() product: Product;


  constructor(private router: Router) {}

  onClick(): void {
    this.router.navigateByUrl(`product/${this.product.id}`)
  }

}
