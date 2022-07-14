import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneItemComponent } from './phone-item/phone-item.component';
import { LapListComponent } from './lap-list/lap-list.component';
import { LapItemComponent } from './lap-item/lap-item.component';



@NgModule({
  declarations: [
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PhoneListComponent,
    PhoneItemComponent,
    LapListComponent,
    LapItemComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [ProductsComponent],
})
export class ProductsModule { }
