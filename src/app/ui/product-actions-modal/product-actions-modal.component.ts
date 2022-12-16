import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/const/product.const';

@Component({
  selector: 'app-product-actions-modal',
  templateUrl: './product-actions-modal.component.html',
  styleUrls: ['./product-actions-modal.component.scss']
})
export class ProductActionsModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

  }
}
