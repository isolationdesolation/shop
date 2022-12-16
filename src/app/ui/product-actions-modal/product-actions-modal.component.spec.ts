import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductActionsModalComponent } from './product-actions-modal.component';

describe('ProductActionsModalComponent', () => {
  let component: ProductActionsModalComponent;
  let fixture: ComponentFixture<ProductActionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductActionsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductActionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
