import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/const/product.const';
import { ProductsFacadeService } from 'src/app/data-access/products.facade.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  addProductForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(225)]),
    price: new FormControl(0,[ Validators.min(0), Validators.required] ),
    description: new FormControl('', [Validators.required, Validators.maxLength(225)]),
    image: new FormControl('', [Validators.required, Validators.maxLength(225)]),
    category: new FormControl('', [Validators.required, Validators.maxLength(225)])
  });
  constructor(private productService: ProductsFacadeService){}

  onSubmit(): void {
    // const formData = new FormData()
    this.productService.addProduct(this.addProductForm.value as Product)
  }
}
