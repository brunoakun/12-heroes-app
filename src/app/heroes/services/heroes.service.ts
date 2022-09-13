import { environment } from './../../../environments/environment';
import { IHeroe } from './../interfaces/heroe';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }


  getHeroes(): Observable<IHeroe[]> {
    return this.http.get<IHeroe[]>(`${this.apiUrl}/heroes`)
  }

  getHeroePorId(id: string): Observable<IHeroe> {
    var heroe: any;
    heroe = this.http.get<IHeroe>(`${this.apiUrl}/heroes/${id}`);
    return (heroe);
  }

  getHeroeSugerencia(txtBuscar: string): Observable<IHeroe[]> {
    return this.http.get<IHeroe[]>(`${this.apiUrl}/heroes?q=${txtBuscar}&limit=6`);
  }

  addHeroe(heroe: IHeroe): Observable<IHeroe> {
    return this.http.post<IHeroe>(`${this.apiUrl}/heroes`, heroe);
  }

}
