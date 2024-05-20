import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Pokemons } from '../interfaces/pokemons';


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  
  private appUrl:string;
  private apiUrl: string;

  constructor( private http: HttpClient ) {

    this.appUrl = environment.endpoint;
    this.apiUrl = 'pokemon/';

  }

  getPokemons():Observable<Pokemons>{
    return this.http.get<Pokemons>( this.appUrl + this.apiUrl )

  }


}
