import React from 'react';
import { CircleProgress } from 'components/CircleProgress/CircleProgress';
import DetailsUniversal from 'organisms/DetailsUniversal';
import { PlanetsTypes } from 'types/planetsTypes';

interface PlanetDetailsPageProps {
  data: {
    planet: PlanetsTypes,
    loading: boolean
  }
}

const columns = [
  {
    render: ({ item }: {item: PlanetsTypes}) => {
      return (
        <div>
          Title: {item.name}
        </div>
      );
    }
  },
  {
    render: ({ item }: {item: PlanetsTypes}) => (
      <div>
        Rotation period: {item.rotation_period}
      </div>
    )
  },
  {
    render: ({ item }: {item: PlanetsTypes}) => (
      <div>
        Orbital period: {item.orbital_period}
      </div>
    )
  },
  {
    render: ({ item }: {item: PlanetsTypes}) => (
      <div>
        Diametr: {item.diameter}
      </div>
    )
  },
  {
    render: ({ item }: {item: PlanetsTypes}) => (
      <div>
        Climate: {item.climate}
      </div>
    )
  },
  {
    render: ({ item }: {item: PlanetsTypes}) => (
      <div>
        Population: {item.population}
      </div>
    )
  },
  {
    render: ({ item }: {item: PlanetsTypes}) => (
      <div>
        Residents: {item.residents.length}
      </div>
    )
  },
  {
    render: ({ item }: {item: PlanetsTypes}) => (
      <div>
        Films: {item.films.length}
      </div>
    )
  }
];

const PlanetDetailsPage:React.FC<PlanetDetailsPageProps> = ({data}) => {
  return (
    <>
      {
        data.planet===null && data.loading ? <CircleProgress/> : <DetailsUniversal item={data.planet} columns={columns}/>
      }
    </>
  );
};

export default PlanetDetailsPage;
