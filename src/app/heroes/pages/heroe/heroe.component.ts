import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  auxId: string | any = '';

  constructor(
    public rutaActiva: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auxId = this.rutaActiva.snapshot.paramMap.get('id');

    console.log(this.auxId);

  }

}
