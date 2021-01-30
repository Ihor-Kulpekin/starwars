import { PeopleTypes } from './peopleTypes';
import { FilmsTypes } from './filmsTypes';
import { BasicType, BasicTypeObject } from './basicType';

export interface StarshipsTypes extends BasicTypeObject{
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: PeopleTypes[];
  films: FilmsTypes[]
}

export interface StarshipsStateType extends BasicType {
  starships: StarshipsTypes[];
}
