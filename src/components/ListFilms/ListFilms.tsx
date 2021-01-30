import React from 'react';
import { FilmsTypes } from '../../types/filmsTypes';
import FilmItem from '../../molecules/FilmItem';

interface ListFilmsProps {
  films: FilmsTypes[],
  next: string,
  previous: string
}

const ListFilms: React.FC<ListFilmsProps> = ({ films, next, previous }) => (
  <>
    {
      films.length !== 0 ? films?.map((film) => <FilmItem key={film.title} film={film}/>) : null
    }
  </>
);

export default ListFilms;
