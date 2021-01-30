import React from 'react';
import { StyledItem } from '../styled-components/styled-components';
import vehicle_img from './vehicle.jpeg'
import { VehiclesTypes } from '../types/vehiclesTypes';

interface VehiclesItemProps {
  vehicle: VehiclesTypes;
}

const VehicleItem:React.FC<VehiclesItemProps> = ({vehicle}) => (
  <StyledItem>
    <img src={vehicle_img}  className="img" alt="starship_img"/>
    {
      vehicle.name
    }
  </StyledItem>
)

export default VehicleItem;
