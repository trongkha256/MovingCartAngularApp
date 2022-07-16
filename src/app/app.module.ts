import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { BtProductManagementModule } from './bt-product-management/bt-product-management.module';
import { InteractionModule } from './interaction/interaction.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HelloWorldComponent,
    DataBindingComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    ProductsModule,
    BtProductManagementModule,
    InteractionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
