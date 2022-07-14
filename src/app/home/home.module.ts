import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SlidebarComponent,
    ContentComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
