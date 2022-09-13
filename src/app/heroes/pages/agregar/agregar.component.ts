import { HeroesService } from './../../services/heroes.service';
import { IHeroe, Publisher } from './../../interfaces/heroe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  heroe: IHeroe = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: ''
  }

  publishers = [
    {
      id: 'Dc Comics',
      desc: 'Dc - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];


  constructor(private srvHeroes: HeroesService) { }

  ngOnInit(): void {

  }
  guardar() {
    console.log(this.heroe);
    if (!this.heroe.superhero) return;
    this.srvHeroes.addHeroe(this.heroe);
  }

}
