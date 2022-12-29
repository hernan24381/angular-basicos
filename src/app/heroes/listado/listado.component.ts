import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  constructor() {
    console.log('Constructor')
  }

  ngOnInit(): void {
    console.log('ngOninit')
  }

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';

  }

}
