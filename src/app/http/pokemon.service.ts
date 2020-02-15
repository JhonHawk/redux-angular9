import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<any> {
    return this._http.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964')
  }
}
