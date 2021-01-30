import React from 'react';
import { StyledItem } from '../styled-components/styled-components';
import starship_img from './starship.jpg'
import { StarshipsTypes } from '../types/starshipsTypes';

interface StarshipItemProps {
  starship: StarshipsTypes;
}

const StarshipItem:React.FC<StarshipItemProps> = ({starship}) => (
  <StyledItem>
    <img src={starship_img}  className="img" alt="starship_img"/>
    {
      starship.name
    }
  </StyledItem>
)

export default StarshipItem;
