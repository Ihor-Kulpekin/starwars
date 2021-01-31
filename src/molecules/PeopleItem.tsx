import React from 'react';
import { StyledItem } from 'styled-components/styled-components';
import kaylo from './kaylo_ren.jpg';
import { PeopleTypes } from 'types/peopleTypes';
import { NavLink } from 'react-router-dom';
import { getId } from 'utils/getId';

interface PeopleItemProps {
  person: PeopleTypes
}

const PeopleItem: React.FC<PeopleItemProps> = ({person}) => (
  <NavLink to={'/characters/' + getId(person)}>
    <StyledItem>
      <img src={kaylo} className="img" alt=""/>
      {
        person.name
      }
    </StyledItem>
  </NavLink>
)

export default PeopleItem;
