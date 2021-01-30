import React from 'react';
import { PeopleTypes } from '../../types/peopleTypes';
import { CircleProgress } from '../../components/CircleProgress/CircleProgress';
import DetailsUniversal from '../../organisms/DetailsUniversal';

interface CharacterDetailsPageProps {
  data: {
    character: PeopleTypes,
    loading: boolean
  }
}

const columns = [
  {
    render: ({ item }: { item: PeopleTypes }) => {
      return (
        <div>
          Name: {item.name}
        </div>
      );
    }
  },
  {
    render: ({ item }: { item: PeopleTypes }) => (
      <div>
        Episode: {item.height}
      </div>
    )
  },
  {
    render: ({ item }: { item: PeopleTypes }) => (
      <div>
        Director: {item.birth_year}
      </div>
    )
  },
  {
    render: ({ item }: { item: PeopleTypes }) => (
      <div>
        Gender: {item.gender}
      </div>
    )
  },
  {
    render: ({ item }: { item: PeopleTypes }) => (
      <div>
        Characters: {item.vehicles.length}
      </div>
    )
  },
  {
    render: ({ item }: { item: PeopleTypes }) => (
      <div>
        Description: {item.starships.length}
      </div>
    )
  },
  {
    render: ({ item }: { item: PeopleTypes }) => (
      <div>
        Description: {item.homeworld}
      </div>
    )
  }
];

const CharacterDetailsPage: React.FC<CharacterDetailsPageProps> = ({ data }) => (
  <>
    {
      data.character === null && data.loading ? <CircleProgress/> :
        <DetailsUniversal item={data.character} columns={columns}/>
    }
  </>
);

export default CharacterDetailsPage;
