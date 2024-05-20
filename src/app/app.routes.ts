import { Routes } from '@angular/router';
import path from 'path';
import { HeaderComponent } from './components/header/header.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

export const routes: Routes = [
    {
        path: 'header',
        component: HeaderComponent
    },



    
    {
        path: '',
        component: PokemonListComponent
    },
    {
        path:'**', pathMatch: 'full', redirectTo:''
    }
];
