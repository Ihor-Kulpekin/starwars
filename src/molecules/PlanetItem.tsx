import React from 'react';
import { StyledItem } from '../styled-components/styled-components';
import { PlanetsTypes } from '../types/planetsTypes';
import planet_img from './planet.jpg';
import { NavLink } from 'react-router-dom';
import { getId } from '../utils/getId';

interface PlanetItemProps {
  planet: PlanetsTypes;
}

const PlanetItem: React.FC<PlanetItemProps> = ({ planet }) => (
  <NavLink to={'/planets/' + getId(planet)}>
    <StyledItem>
      <img src={planet_img} className="img" alt="planet_img" />
      {planet.name}
    </StyledItem>
  </NavLink>
);

export default PlanetItem;
