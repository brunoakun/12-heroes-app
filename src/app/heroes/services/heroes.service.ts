import { IHeroe } from './../interfaces/heroe';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  getHeroes():Observable<IHeroe[]> {
    return this.http.get<IHeroe[]>('http://localhost:3000/heroes')
  }
}
