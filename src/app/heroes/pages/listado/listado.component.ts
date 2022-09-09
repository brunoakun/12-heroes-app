import { IHeroe } from './../../interfaces/heroe';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  heroes: IHeroe[] = [];

  constructor(private srvHeroes: HeroesService) { }

  ngOnInit(): void {
    this.srvHeroes.getHeroes()
      .subscribe(resp => {
        this.heroes = resp
      });
  }

}
