import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from "./product-list/product-list.component"

@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsListComponent
  ]
})
export class ProductsModule { }
