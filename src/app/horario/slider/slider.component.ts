import { Component, OnInit } from '@angular/core';
import { materia } from '../horario.model';
import { HorarioService } from '../horario.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  
  clases:materia[];

  constructor(private horarioService:HorarioService) { }

  ngOnInit(): void {
    this.clases = this.horarioService.getClases();
  }

}
