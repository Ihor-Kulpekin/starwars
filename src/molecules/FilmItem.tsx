import React from 'react';
import styled from 'styled-components';
import { FilmsTypes } from '../actions/types/filmsTypes';
import filmItem from './film_item.jpg';

interface FilmItemProps {
  film: FilmsTypes;
}

const StyledFilmItem = styled.li`
  color: white;
  display: flex;
  flex-direction: column;
  margin: 20px;
  text-align: center;
  padding: 10px;

  .img {
    height: 300px;
    width: 350px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
`;

const FilmItem: React.FC<FilmItemProps> = ({ film }) => (
  <StyledFilmItem>
    <img src={filmItem} className="img" alt="film" />
    {film.title}
  </StyledFilmItem>
);

export default FilmItem;
