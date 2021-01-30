import { FilmsTypes } from './filmsTypes';
import { SpeciesTypes } from './speciesTypes';
import { VehiclesTypes } from './vehiclesTypes';
import { StarshipsTypes } from './starshipsTypes';
import { BasicStateDetails, BasicType } from './basicType';

export interface PeopleTypes {
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string,
  films: FilmsTypes[],
  species: SpeciesTypes[],
  vehicles: VehiclesTypes[],
  starships: StarshipsTypes[],
  created: string,
  edited: string,
  url: string
}

export interface PeopleStateType extends BasicType{
  people: FilmsTypes[],
}

export interface CharacterDetailsStateType extends BasicStateDetails{
  character: PeopleTypes | null
}
