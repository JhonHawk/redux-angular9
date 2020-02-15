import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { PokemonService } from './http/pokemon.service';
import { SelectAutocompleteComponent } from './global/select-autocomplete/select-autocomplete.component';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    SelectAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    PokemonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
