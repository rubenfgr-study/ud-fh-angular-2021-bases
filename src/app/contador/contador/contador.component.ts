import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>

    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="resolver(base)">+ {{ base }}</button>

    <span> {{ total }} </span>

    <button (click)="resolver(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  title = 'Sumar';
  total = 0;
  base: number = 5;

  /*   sumar() {
    ++this.total
  }

  restar() {
    --this.total;
  } */

  resolver(valor: number) {
    this.total += valor;
  }
}
