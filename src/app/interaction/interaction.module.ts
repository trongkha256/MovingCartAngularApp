import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { UserComponent } from './user/user.component';
import { MovieComponent } from './movie/movie.component';
import { ToggleComponent } from './toggle/toggle.component';



@NgModule({
  declarations: [
    InteractionComponent,
    UserComponent,
    UserComponent,
    MovieComponent,
    ToggleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InteractionComponent
  ]
})
export class InteractionModule { }
