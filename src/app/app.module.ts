import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProductListCardComponent } from './ui/product-list-card/product-list-card.component';
import {MatCardModule} from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { ProductDetailsComponent } from './ui/product-details/product-details.component';
import { ProductListComponent } from './ui/product-list/product-list.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/effects/products.effect';
import { appReducer as red } from './store/reducers/app.reducer';
import { MaterialElevationDirective } from './directives/shadow.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductListCardComponent,
    MaterialElevationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    StoreModule.forRoot({app: red}),
    EffectsModule.forRoot([ProductEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
