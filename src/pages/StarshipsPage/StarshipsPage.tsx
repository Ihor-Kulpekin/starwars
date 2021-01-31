import React from 'react';
import { CircleProgress } from 'components/CircleProgress/CircleProgress';
import ListStarships from 'components/ListStarships/ListStarships';
import { StarshipsTypes } from 'types/starshipsTypes';

export interface StarshipsPageProps {
  data: {
    starships: StarshipsTypes[],
    next: string,
    previous: string,
    loading: boolean
  }
}

const StarshipsPage : React.FC<StarshipsPageProps>= ({data}) => (
  <>
    {
      data.loading? <CircleProgress />: <ListStarships starships={data.starships} next={data.next} previous={data.previous}/>
    }
  </>
)

export default StarshipsPage;
