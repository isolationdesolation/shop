import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/const/product.const';
import { ProductsFacadeService } from 'src/app/data-access/products.facade.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  editingMode = new FormControl(true);
  controlForId = new FormControl(
    '',
    this.editingMode ? Validators.required : []
  );

  addProductForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(225),
    ]),
    price: new FormControl(0, [Validators.min(0), Validators.required]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(225),
    ]),
    image: new FormControl('', [
      Validators.required,
      Validators.maxLength(225),
    ]),
    category: new FormControl('', [
      Validators.required,
      Validators.maxLength(225),
    ]),
  });
  constructor(private productService: ProductsFacadeService, private router: Router) {}

  onSubmit(): void {
    this.editingMode
      ? this.productService.updateProduct(
          this.controlForId.value!,
          this.addProductForm.value as Product
        )
      : this.productService.addProduct(this.addProductForm.value as Product);
  }

  
  backToListing(): void {
    this.router.navigateByUrl(``)
  }
}
