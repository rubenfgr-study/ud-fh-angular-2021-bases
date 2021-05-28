import { Component, Input } from '@angular/core';
import { Personaje } from './../interfaces/dbz.interfaces';
import { DbzService } from './../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  // tslint:disable-next-line: no-output-on-prefix
  /*   @Output()
  onNewCharacter: EventEmitter<Personaje> = new EventEmitter<Personaje>();
 */

  constructor(private dbzService: DbzService) {}

  agregar(): void {
    if (this.nuevo.nombre.trim().length !== 0) {
      // this.onNewCharacter.emit(this.nuevo);
      this.dbzService.addCharacter(this.nuevo);
      this.nuevo = {
        nombre: '',
        poder: 0,
      };
    }
  }
}
