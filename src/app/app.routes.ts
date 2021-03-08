import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { ModuleWithProviders } from '@angular/core';
import { PokemonDetailComponent } from './components/pokemon/pokemon-detail/pokemon-detail.component';


export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'pokemon-detail/:id', component: PokemonDetailComponent},
]


export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);
