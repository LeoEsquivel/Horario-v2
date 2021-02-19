import { Injectable } from '@angular/core';
import { materia } from './horario.model';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  private clase:materia[];

  constructor() {
    this.clase = [
    {
      nombreMateria: 'ADMINISTRACION DE PROYECTOS DE TECNOLOGIAS DE LA INFORMACION',
      nombreProfesor: 'MARIO ALBERTO GÓMEZ RODRÍGUEZ',
      dia: 'Viernes',
      hora:10.00,
      linkMeet: 'asdasdads',
      linkClass: 'qweqeqer'
    },
    {
      nombreMateria: 'INGLÉS VIII',
      nombreProfesor: 'ANA VANESSA VAZQUEZ HERRERA',
      dia: 'Viernes',
      hora:10.20,
      linkMeet: 'asdasdads',
      linkClass: 'qweqeqer'
    },
    {
      nombreMateria: 'TECNOLOGIAS Y APLICACIONES EN INTERNET',
      nombreProfesor: 'JOSÉ FIDENCIO LÓPEZ LUNA',
      dia: 'Viernes',
      hora:10.40,
      linkMeet: 'asdasdads',
      linkClass: 'qweqeqer'
    }
  ];
  }
  
  public getClases(){
    return this.clase;
  }

}
