import { PeopleTypes } from './peopleTypes';
import { FilmsTypes } from './filmsTypes';
import { BasicStateDetails, BasicType, BasicTypeObject } from './basicType';

export interface VehiclesTypes extends BasicTypeObject{
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
  MGLT: string;
  pilots: PeopleTypes[];
  films: FilmsTypes[]
}

export interface VehiclesStateType extends BasicType{
  vehicles: VehiclesTypes[]
}

export interface VehicleDetailsStateType extends BasicStateDetails{
  vehicle: VehiclesTypes | null
}
