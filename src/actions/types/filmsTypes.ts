import { PeopleTypes } from './peopleTypes';

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

export interface FilmsStateType {
  films: FilmsTypes[],
  loading: boolean,
  error: boolean,
  count: number,
  next: string,
  previous: string
}
