import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroesShow: string[] = [];
  heroeBorrado: string = '';

  constructor() {
    this.heroes.forEach((e) => this.heroesShow.push(e));
  }

  addHero() {
    this.heroesShow.push(
      this.heroes[Math.floor(Math.random() * this.heroes.length)]
    );
  }

  removeHero() {
    this.heroeBorrado = this.heroesShow.shift() || '';
  }
}
