import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { Pokemons } from '../../interfaces/pokemons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {

  pokemonList!: Pokemons
  
  constructor(private _pokemonService: PokeapiService) {}

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons(){
    this._pokemonService.getPokemons().subscribe((data)=>{
      console.log(data)
      this.pokemonList = data
    })
  }

}
