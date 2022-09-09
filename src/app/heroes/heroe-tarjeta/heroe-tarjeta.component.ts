import { IHeroe } from './../interfaces/heroe';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.scss']
})

export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe!: IHeroe;

  constructor() { }
  ngOnInit(): void {
  }

}
