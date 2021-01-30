import React from 'react';
import { StarshipsTypes } from '../../types/starshipsTypes';
import StarshipItem from '../../molecules/StarshipItem';

interface ListFilmsProps {
  starships: StarshipsTypes[];
  next: string;
  previous: string;
}

const ListStarships: React.FC<ListFilmsProps> = ({ starships, previous, next }) => (
  <>
    {starships.length !== 0
      ? starships?.map((starship) => <StarshipItem key={starship.name} starship={starship} />)
      : null}
  </>
);

export default ListStarships;
