import { Component, Input, OnInit } from '@angular/core';
import { materia } from '../horario.model';
import { HorarioService } from '../horario.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private horarioService:HorarioService) { }
  
  @Input() clase:materia;

  ngOnInit(): void {
  }

}
