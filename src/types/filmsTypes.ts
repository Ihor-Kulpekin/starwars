import { PeopleTypes } from './peopleTypes';
import { BasicStateDetails, BasicType } from './basicType';

export interface FilmsTypes {
  title: string,
  episode_id: number,
  opening_crawl: string,
  director: string,
  producer: string,
  release_date: string,
  characters: PeopleTypes[],
  created: string,
  edited: string,
  url: string
}

export interface FilmsStateType extends BasicType{
  films: FilmsTypes[]
}

export interface FilmDetailsStateType extends BasicStateDetails{
  film: FilmsTypes | null,
  characters: PeopleTypes[]
}
