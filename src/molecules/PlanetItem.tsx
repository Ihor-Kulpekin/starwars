import React from 'react'
import { StyledItem } from '../styled-components/styled-components'
import { PlanetsTypes } from '../types/planetsTypes';
import planet_img from './planet.jpg'

interface PlanetItemProps {
  planet: PlanetsTypes
}

const PlanetItem: React.FC<PlanetItemProps> = ({planet}) => (
  <StyledItem>
    <img src={planet_img} className="img" alt="planet_img"/>
    {
      planet.name
    }
  </StyledItem>
)

export default PlanetItem;
