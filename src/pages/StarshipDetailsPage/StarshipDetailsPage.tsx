import React from 'react';
import { CircleProgress } from 'components/CircleProgress/CircleProgress';
import DetailsUniversal from 'organisms/DetailsUniversal';
import { StarshipsTypes } from 'types/starshipsTypes';

interface StarshipDetailsPageProps {
  data: {
    starship: StarshipsTypes,
    loading: boolean
  }
}

const columns = [
  {
    render: ({ item }: { item: StarshipsTypes }) => {
      return (
        <>
          Name: {item.name}
        </>
      );
    }
  },
  {
    render: ({ item }: { item: StarshipsTypes }) => (
      <div>
        Model: {item.model}
      </div>
    )
  },
  {
    render: ({ item }: { item: StarshipsTypes }) => (
      <div>
        Cargo Opacity: {item.cargo_capacity}
      </div>
    )
  },
  {
    render: ({ item }: { item: StarshipsTypes }) => (
      <div>
        Cost: {item.cost_in_credits}
      </div>
    )
  },
  {
    render: ({ item }: { item: StarshipsTypes }) => (
      <div>
        Films: {item.films.length}
      </div>
    )
  },
  {
    render: ({ item }: { item: StarshipsTypes }) => (
      <div>
        Starship class: {item.starship_class}
      </div>
    )
  },
  {
    render: ({ item }: { item: StarshipsTypes }) => (
      <div>
        Max speed: {item.max_atmosphering_speed}
      </div>
    )
  },
  {
    render: ({ item }: { item: StarshipsTypes }) => (
      <div>
        Length: {item.length}
      </div>
    )
  }
];

const StarshipDetailsPage: React.FC<StarshipDetailsPageProps> = ({data}) => {
  return (
    <>
      {
        data.starship === null && data.loading ? <CircleProgress/> :
          <DetailsUniversal item={data.starship} columns={columns}/>
      }
    </>
  );
};

export default StarshipDetailsPage;
