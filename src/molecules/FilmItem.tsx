import React from 'react';
import { FilmsTypes } from '../types/filmsTypes';
import filmItem from './film_item.jpg';
import { StyledItem } from '../styled-components/styled-components';
import { NavLink } from 'react-router-dom';

interface FilmItemProps {
  film: FilmsTypes;
}

const FilmItem: React.FC<FilmItemProps> = ({ film }) => {
  const segments = film.url.split('/');
  const id = Number(segments[segments.length - 2]);
  return (
    <NavLink to={'/films/' + id}>
      <StyledItem>
        <img src={filmItem} className="img" alt="film" />
        {film.title}
      </StyledItem>
    </NavLink>
  )
}
export default FilmItem;
