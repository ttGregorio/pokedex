import { Form } from "./form.model";
import { Ability } from "./ability.model";
import { Move } from "./move.model";

export class PokemonDetail{
    public base_experience:number;
    public forms:Form[];
    public abilities:Ability[];
    public game_indices:any;
    public moves:Move[];
    constructor(){}
}