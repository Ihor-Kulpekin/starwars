import { PeopleTypes } from './peopleTypes';
import { FilmsTypes } from './filmsTypes';
import { BasicStateDetails, BasicType, BasicTypeObject } from './basicType';

export interface PlanetsTypes extends BasicTypeObject{
  name: string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  residents: PeopleTypes[],
  films: FilmsTypes[]
}

export interface PlanetsStateType extends BasicType{
  planets: PlanetsTypes[]
}

export interface PlanetDetailsStateType extends BasicStateDetails{
  planet: PlanetsTypes | null
}
