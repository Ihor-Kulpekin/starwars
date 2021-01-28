import React from 'react';
import { StarshipsTypes } from '../../actions/types/starshipsTypes';
import { CircleProgress } from '../../components/CircleProgress/CircleProgress';
import ListVehicles from '../../components/ListVehicles/ListVehicles';

interface VehiclesPageProps {
  data: {
    vehicles: StarshipsTypes[],
    next: string,
    previous: string,
    loading: boolean
  }
}

const VehiclesPage: React.FC<VehiclesPageProps> = ({data}) => (
  <>
    {
      data.loading? <CircleProgress />: <ListVehicles vehicles={data.vehicles} next={data.next} previous={data.previous}/>
    }
  </>
)

export default VehiclesPage;
