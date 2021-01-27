import React from 'react'
import styled from 'styled-components';
import { FilmsTypes } from '../../actions/types/filmsTypes';
import FilmItem from '../../molecules/FilmItem';

interface ListFilmsProps {
  films: FilmsTypes[],
  next: boolean,
  previous: boolean
}

const WrapperListFilms = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const ListFilms: React.FC<ListFilmsProps> = ({films, next, previous}) => (
  <WrapperListFilms>
    {
      films.length!==0?films?.map((film)=> <FilmItem film={film}/>): null
    }
  </WrapperListFilms>
)

export default ListFilms
