import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  findFirst(count:number){
    return this.http.get(`${environment.ENDPOINT_API}/pokemon?offset=0&limit=${count}`);
  }

  getPage(url:string){
    return this.http.get(url);
  }


}
