import { IHeroe } from './../../interfaces/heroe';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  public txtBuscar: string = '';
  heroes: IHeroe[] = [];
  heroeSeleccionado: IHeroe | undefined;

  constructor(private srvHeroes: HeroesService) { }

  ngOnInit(): void {

  }

  buscar() {
    this.srvHeroes.getHeroeSugerencia(this.txtBuscar)
      .subscribe(data => this.heroes = data);
  }

  opcionSeleccionada(evento: any) {

    console.log(evento);



    const heroe: IHeroe = evento.option.value;
    if (!heroe) {
      this.txtBuscar = '';
      this.heroeSeleccionado = undefined;
      return;
    }

    console.log(heroe);
    this.txtBuscar = heroe.superhero;

    this.srvHeroes.getHeroePorId(heroe.id!)
      .subscribe(data => this.heroeSeleccionado = data);
  }



}
