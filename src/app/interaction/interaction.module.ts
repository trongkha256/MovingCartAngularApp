import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { UserComponent } from './user/user.component';
import { MovieComponent } from './movie/movie.component';



@NgModule({
  declarations: [
    InteractionComponent,
    UserComponent,
    UserComponent,
    MovieComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InteractionComponent
  ]
})
export class InteractionModule { }
