import React from 'react';
import { FilmsTypes } from '../../types/filmsTypes';
import { CircleProgress } from '../../components/CircleProgress/CircleProgress';
import DetailsUniversal from '../../organisms/DetailsUniversal';

interface FilmDetailsPageProps {
  data: {
    film: FilmsTypes,
    loading: boolean
  }
}

const columns = [
  {
    render: ({ item }: {item: FilmsTypes}) => {
      return (
        <div>
          Title: {item.title}
        </div>
      );
    }
  },
  {
    render: ({ item }: {item: FilmsTypes}) => (
      <div>
        Episode: {item.episode_id}
      </div>
    )
  },
  {
    render: ({ item }: {item: FilmsTypes}) => (
      <div>
        Director: {item.director}
      </div>
    )
  },
  {
    render: ({ item }: {item: FilmsTypes}) => (
      <div>
        Producer: {item.producer}
      </div>
    )
  },
  {
    render: ({ item }: {item: FilmsTypes}) => (
      <div>
        Characters: {item.characters.length}
      </div>
    )
  },
  {
    render: ({ item }: {item: FilmsTypes}) => (
      <div>
        Description: {item.opening_crawl}
      </div>
    )
  }
];

const FilmDetailsPage: React.FC<FilmDetailsPageProps> = ({ data }) => (
  <>
    {
      data.film===null && data.loading ? <CircleProgress/> : <DetailsUniversal item={data.film} columns={columns}/>
    }
  </>
);

export default FilmDetailsPage;
