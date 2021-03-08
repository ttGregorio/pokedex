import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Pokemon } from 'src/app/model/pokemon.model';
import { ResponseApi } from 'src/app/model/response-api.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  count:number = 10;

  previous:string = "";

  next:string = "";

  pokemonsList:Pokemon[] = [];

  constructor(
    private translate: TranslateService,
      public pokemonService:PokemonService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.findFirst();
  }

  findFirst(){
    this.pokemonService.findFirst(this.count).subscribe((responseApi: ResponseApi) => {
      this.pokemonsList = responseApi.results;
      this.previous = responseApi.previous;
      this.next = responseApi.next;
    }, err =>{
     /* this.showMessage({
        type:'error',
        text:err['error']['errors'][0]
      });*/
    });
  }

  detail(url:string){
    this.router.navigate(['/pokemon-detail', url]);
  }

  setPreviousPage(){
    console.log(this.previous);
    this.pokemonService.getPage(this.previous).subscribe((responseApi: ResponseApi) => {
      this.pokemonsList = responseApi.results;
      this.previous = responseApi.previous;
      this.next = responseApi.next;
    }, err =>{
     /* this.showMessage({
        type:'error',
        text:err['error']['errors'][0]
      });*/
    });
  }

  setNextPage(){
    console.log(this.next);
    this.pokemonService.getPage(this.next).subscribe((responseApi: ResponseApi) => {
      this.pokemonsList = responseApi.results;
      this.previous = responseApi.previous;
      this.next = responseApi.next;
    }, err =>{
     /* this.showMessage({
        type:'error',
        text:err['error']['errors'][0]
      });*/
    });
  }
}
