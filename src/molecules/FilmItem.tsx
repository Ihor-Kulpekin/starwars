import React from 'react';
import { FilmsTypes } from '../actions/types/filmsTypes';
import filmItem from './film_item.jpg';
import { StyledItem } from '../styled-components/styled-components';

interface FilmItemProps {
  film: FilmsTypes;
}

const FilmItem: React.FC<FilmItemProps> = ({ film }) => (
  <StyledItem>
    <img src={filmItem} className="img" alt="film" />
    {film.title}
  </StyledItem>
);

export default FilmItem;
