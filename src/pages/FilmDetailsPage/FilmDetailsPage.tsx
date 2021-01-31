import React from 'react';
import { FilmsTypes } from 'types/filmsTypes';
import { CircleProgress } from 'components/CircleProgress/CircleProgress';
import DetailsUniversal from 'organisms/DetailsUniversal';
import ColumnItem from 'molecules/ColumnItem';
import { PeopleTypes } from 'types/peopleTypes';

interface FilmDetailsPageProps {
  data: {
    film: FilmsTypes;
    loading: boolean;
  };
}

const columns = [
  {
    dataIndex: 0,
    render: ({ item }: { item: FilmsTypes }) => <ColumnItem title="Title" value={item.title} />
  },
  {
    dataIndex: 1,
    render: ({ item }: { item: FilmsTypes }) => (
      <ColumnItem title="Episode" value={item.episode_id} />
    )
  },
  {
    dataIndex: 2,
    render: ({ item }: { item: FilmsTypes }) => (
      <ColumnItem title="Director" value={item.director} />
    )
  },
  {
    dataIndex: 3,
    render: ({ item }: { item: FilmsTypes }) => (
      <ColumnItem title="Producer" value={item.producer} />
    )
  },
  {
    dataIndex: 4,
    isCollapse: true,
    render: ({
      item,
      collapse,
      collapsed,
               characters,
               loading
    }: {
      item: FilmsTypes;
      collapse: boolean;
      collapsed?(): void;
      characters: PeopleTypes[],
      loading: boolean
    }) => (
      <ColumnItem
        title="Characters"
        value={item.characters.length !== 0 ? item.characters : 0}
        collapse={collapse}
        collapsed={collapsed}
        characters={characters}
        loading={loading}
      />
    )
  },
  {
    dataIndex: 5,
    render: ({ item }: { item: FilmsTypes }) => (
      <ColumnItem title="Description" value={item.opening_crawl} />
    )
  }
];

const FilmDetailsPage: React.FC<FilmDetailsPageProps> = ({ data }) => (
  <>
    {data.film === null && data.loading ? (
      <CircleProgress />
    ) : (
      <DetailsUniversal item={data.film}  columns={columns} />
    )}
  </>
);

export default FilmDetailsPage;
