import React from 'react';
import { StyledItem } from 'styled-components/styled-components';
import starship_img from './starship.jpg'
import { StarshipsTypes } from 'types/starshipsTypes';
import { NavLink } from 'react-router-dom';
import { getId } from 'utils/getId';

interface StarshipItemProps {
  starship: StarshipsTypes;
}

const StarshipItem:React.FC<StarshipItemProps> = ({starship}) => (
  <NavLink to={'/starships/'+ getId(starship)}>
    <StyledItem>
      <img src={starship_img}  className="img" alt="starship_img"/>
      {
        starship.name
      }
    </StyledItem>
  </NavLink>
)

export default StarshipItem;
