import React from 'react';
import { VehiclesTypes } from '../../types/vehiclesTypes';
import { CircleProgress } from '../../components/CircleProgress/CircleProgress';
import DetailsUniversal from '../../organisms/DetailsUniversal';
import { StarshipsTypes } from '../../types/starshipsTypes';

interface VehicleDetailsPageProps {
  data: {
    vehicle: VehiclesTypes,
    loading: boolean
  }
}

const columns = [
  {
    render: ({ item }: { item: VehiclesTypes }) => {
      return (
        <>
          Name: {item.name}
        </>
      );
    }
  },
  {
    render: ({ item }: { item: VehiclesTypes }) => (
      <div>
        Model: {item.model}
      </div>
    )
  },
  {
    render: ({ item }: { item: VehiclesTypes }) => (
      <div>
        Cargo Opacity: {item.cargo_capacity}
      </div>
    )
  },
  {
    render: ({ item }: { item: VehiclesTypes }) => (
      <div>
        Cost: {item.cost_in_credits}
      </div>
    )
  },
  {
    render: ({ item }: { item: VehiclesTypes }) => (
      <div>
        Films: {item.films.length}
      </div>
    )
  },
  {
    render: ({ item }: { item: VehiclesTypes }) => (
      <div>
        pilots: {item.pilots.length}
      </div>
    )
  },
  {
    render: ({ item }: { item: VehiclesTypes }) => (
      <div>
        Number of Passengers: {item.passengers}
      </div>
    )
  },
  {
    render: ({ item }: { item: VehiclesTypes }) => (
      <div>
        Max speed: {item.max_atmosphering_speed}
      </div>
    )
  },
  {
    render: ({ item }: { item: VehiclesTypes }) => (
      <div>
        Length: {item.length}
      </div>
    )
  }
];

const VehicleDetailsPage: React.FC<VehicleDetailsPageProps> = ({data}) => {
  return (
    <>
      {
        data.vehicle === null && data.loading ? <CircleProgress/> :
          <DetailsUniversal item={data.vehicle} columns={columns}/>
      }
    </>
  );
};

export default VehicleDetailsPage;
