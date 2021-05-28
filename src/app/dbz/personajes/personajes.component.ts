import { Personaje } from './../interfaces/dbz.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  @Input()
  personajes: Personaje[] = [];
}
