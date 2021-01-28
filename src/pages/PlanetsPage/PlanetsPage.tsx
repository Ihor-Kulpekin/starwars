import React from 'react';
import { CircleProgress } from '../../components/CircleProgress/CircleProgress';
import { PlanetsTypes } from '../../actions/types/planetsTypes';
import ListPlanets from '../../components/ListPlanets/ListPlanets';

interface PlanetsPageProps {
  data: {
    planets: PlanetsTypes[],
    next: string,
    previous: string,
    loading: boolean
  }
}

const PlanetsPage: React.FC<PlanetsPageProps> = ({data}) => (
  <>
    {
      data.loading? <CircleProgress />: <ListPlanets planets={data.planets} next={data.next} previous={data.previous}/>
    }
  </>
)

export default PlanetsPage;
