import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './horario/slider/slider.component';
import { CardsComponent } from './horario/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
