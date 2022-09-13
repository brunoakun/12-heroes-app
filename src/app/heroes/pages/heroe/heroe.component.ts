import { HeroesService } from './../../services/heroes.service';
import { IHeroe } from './../../interfaces/heroe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  auxId: string | any = '';
  heroe: IHeroe | any = {};
  heroePersonajes: string = '';

  constructor(
    public rutaActiva: ActivatedRoute,
    public ruta: Router,
    private srvHeroes: HeroesService
  ) { }

  ngOnInit(): void {
    this.auxId = this.rutaActiva.snapshot.paramMap.get('id');
    this.srvHeroes.getHeroePorId(this.auxId)
      .subscribe(resp => {
        this.heroe = resp;
        
        this.heroePersonajes = this.heroe.characters.split(',');
      });

  }

  volver() {
    this.ruta.navigate(['heroes/listado']);
  }
 



}
