import { Injectable } from '@angular/core';
import { ProductActionsModalComponent } from './product-actions-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(public dialog: MatDialog) {}

  openDialogWithProduct(text: string): void {
    this.dialog.open(ProductActionsModalComponent, {
      data: text,
    });
  }
}
