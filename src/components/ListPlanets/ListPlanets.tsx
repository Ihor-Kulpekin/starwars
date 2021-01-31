import React from 'react';
import { PlanetsTypes } from 'types/planetsTypes';
import PlanetItem from 'molecules/PlanetItem';

interface ListPlanetsProps {
  planets: PlanetsTypes [],
  next: string,
  previous: string
}

const ListPlanets: React.FC<ListPlanetsProps> = ({planets}) => (
  <>
    {
      planets.length!== undefined && planets.length!==0?planets?.map((planet)=> <PlanetItem key={planet.name} planet={planet}/>): null
    }
  </>
)

export default ListPlanets;
