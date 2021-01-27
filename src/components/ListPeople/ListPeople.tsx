import React from 'react';
import { PeopleTypes } from '../../actions/types/peopleTypes';
import PeopleItem from '../../molecules/PeopleItem';

interface ListPeopleProps {
  people: PeopleTypes[];
  next: string;
  previous: string;
}

const ListPeople: React.FC<ListPeopleProps> = ({ people, previous, next }) => (
  <>{people.length !== 0 ? people?.map((person) => <PeopleItem person={person} />) : null}</>
);

export default ListPeople;
