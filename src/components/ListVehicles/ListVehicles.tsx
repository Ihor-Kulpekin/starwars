import React from 'react';
import { VehiclesTypes } from '../../types/vehiclesTypes';
import VehicleItem from '../../molecules/VehiclesItem';

interface ListVehiclesProps {
  vehicles: VehiclesTypes[],
  next: string,
  previous: string
}

const ListVehicles: React.FC<ListVehiclesProps> = ({vehicles}) => (
  <>
    {vehicles.length !== 0
      ? vehicles?.map((vehicle) => <VehicleItem key={vehicle.name} vehicle={vehicle} />)
      : null
    }
  </>
)

export default ListVehicles;
