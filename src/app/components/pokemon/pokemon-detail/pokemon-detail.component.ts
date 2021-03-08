import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetail } from 'src/app/model/pokemon-detail.model';
import { Pokemon } from 'src/app/model/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.sass']
})
export class PokemonDetailComponent implements OnInit {

  pokemonDetail:PokemonDetail;

  constructor(
    public pokemonService:PokemonService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id:string = this.route.snapshot.params['id'];
    
    this.loadPokemon(id);
  }

  loadPokemon(url:string){
    this.pokemonService.getPage(url).subscribe((responseApi: PokemonDetail) => {
      this.pokemonDetail = responseApi;
    }, err =>{
     /* this.showMessage({
        type:'error',
        text:err['error']['errors'][0]
      });*/
    });
  }

}
