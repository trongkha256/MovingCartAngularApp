import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HelloWorldComponent,
    DataBindingComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
