import React  from 'react';
import { PeopleTypes } from 'types/peopleTypes';
import { CircleProgress } from 'components/CircleProgress/CircleProgress';
import ListPeople from 'components/ListPeople/ListPeople';

interface PeoplePageProps {
  data: {
    people: PeopleTypes[],
    next: string,
    previous: string,
    loading: boolean
  }
}

const CharactersPage: React.FC<PeoplePageProps> = ({data}) => {
  return (
    <>
      {
        data.loading? <CircleProgress />: <ListPeople people={data.people} next={data.next} previous={data.previous}/>
      }
    </>
  )
}

export default CharactersPage;
