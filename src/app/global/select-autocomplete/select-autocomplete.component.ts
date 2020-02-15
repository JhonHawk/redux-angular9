import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/http/pokemon.service';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * @title Filter autocomplete
 */

@Component({
  selector: 'app-select-autocomplete',
  templateUrl: './select-autocomplete.component.html',
  styleUrls: ['./select-autocomplete.component.scss'],
  providers: [PokemonService]
})
export class SelectAutocompleteComponent implements OnInit {
  response: Observable<any>;
  pokemons: string[] = [];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(private _pokemon: PokemonService) { }

  ngOnInit(): void {
    this.getAll()
    this.response.subscribe( x => {
      x.results.forEach(el => {
        this.pokemons.push(el.name);
      });
    })

    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    console.log('filter')
    const filterValue = value.toLowerCase();
    return this.pokemons.filter(option => option.toLowerCase().includes(filterValue));
  }

  getAll() {
    this.response = this._pokemon.getAll()
  }

  setOption(){
  }

}
