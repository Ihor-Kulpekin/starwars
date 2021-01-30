import React from 'react';
import { CircleProgress } from '../../components/CircleProgress/CircleProgress';
import ListFilms from '../../components/ListFilms/ListFilms';
import { FilmsTypes } from '../../types/filmsTypes';

export interface FilmsPageProps {
  data: {
    films: FilmsTypes[],
    next: string,
    previous: string,
    loading: boolean
  }
}

const FilmsPage: React.FC<FilmsPageProps> = ({data}) => {

  return (
    <>
      {
        data.loading? <CircleProgress />: <ListFilms films={data.films} next={data.next} previous={data.previous}/>
      }
    </>
  );
};

export default FilmsPage;
