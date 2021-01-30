import React from 'react';
import { FilmsTypes } from '../types/filmsTypes';
import filmItem from './film_item.jpg';
import { StyledItem } from '../styled-components/styled-components';
import { NavLink } from 'react-router-dom';
import { getId } from '../utils/getId';

interface FilmItemProps {
  film: FilmsTypes;
}

const FilmItem: React.FC<FilmItemProps> = ({ film }) => {
  return (
    <NavLink to={'/films/' + getId(film)}>
      <StyledItem>
        <img src={filmItem} className="img" alt="film" />
        {film.title}
      </StyledItem>
    </NavLink>
  )
}
export default FilmItem;
