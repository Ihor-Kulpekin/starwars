import React from 'react';
import { StyledItem } from '../styled-components/styled-components';
import kaylo from './kaylo_ren.jpg';
import { PeopleTypes } from '../types/peopleTypes';

interface PeopleItemProps {
  person: PeopleTypes
}

const PeopleItem: React.FC<PeopleItemProps> = ({person}) => (
  <StyledItem>
    <img src={kaylo} className="img" alt=""/>
    {
      person.name
    }
  </StyledItem>
)

export default PeopleItem;
