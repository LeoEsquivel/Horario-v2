import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { CardsComponent } from './cards/cards.component';
import { FormsModule } from '@angular/forms';
import { HorarioService } from './horario.service';



@NgModule({
  declarations: [SliderComponent, CardsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CardsComponent,
    SliderComponent
  ],
  providers:[
    HorarioService
  ]
})
export class HorarioModule { }
