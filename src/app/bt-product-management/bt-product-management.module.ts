import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtProductManagementComponent } from './bt-product-management.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BtProductManagementComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BtProductManagementComponent
  ]
})
export class BtProductManagementModule { }
