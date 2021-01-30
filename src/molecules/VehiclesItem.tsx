import React from 'react';
import { StyledItem } from '../styled-components/styled-components';
import vehicle_img from './vehicle.jpeg'
import { VehiclesTypes } from '../types/vehiclesTypes';
import { NavLink } from 'react-router-dom';
import { getId } from '../utils/getId';

interface VehiclesItemProps {
  vehicle: VehiclesTypes;
}

const VehicleItem:React.FC<VehiclesItemProps> = ({vehicle}) => (
  <NavLink to={'/vehicles/'+getId(vehicle)}>
    <StyledItem>
      <img src={vehicle_img}  className="img" alt="starship_img"/>
      {
        vehicle.name
      }
    </StyledItem>
  </NavLink>
)

export default VehicleItem;
