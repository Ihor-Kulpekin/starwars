import React from 'react'
import { FilmsTypes } from '../../types/filmsTypes';
import { CircleProgress } from '../../components/CircleProgress/CircleProgress';

interface FilmDetailsPageProps {
  data: {
    film: FilmsTypes,
    loading: boolean
  }
}

const FilmDetailsPage: React.FC<FilmDetailsPageProps> = ({data}) => (
  <div>
    {
      data.loading? <CircleProgress />: JSON.stringify(data.film)
    }
  </div>
)

export default FilmDetailsPage;
