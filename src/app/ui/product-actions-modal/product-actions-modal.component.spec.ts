import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddedModalComponent } from './product-actions-modal.component';

describe('ProductActionsModalComponent', () => {
  let component: ProductAddedModalComponent;
  let fixture: ComponentFixture<ProductAddedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddedModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAddedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
