import React from 'react';
import styled from 'styled-components';
import { PeopleTypes } from '../types/peopleTypes';

interface ColumnItemProps {
  title: string;
  collapse?: boolean;

  collapsed?(): void;
  loading?: boolean;
  value: any;
  characters?: PeopleTypes[];
}

const WrapperColumnItem = styled.div<{ collapse?: boolean; length?: number }>`
  padding: 10px;
  text-align: justify;
  .title {
    color: darkgray;
    margin-right: 30px;
  }
  display: ${({ length }) => (length === 0 ? 'block' : 'flex')};
  justify-content: space-between;

  transition: height 1s ease-in-out;
  height: ${({ collapse }) => (collapse ? '100px' : '50px')};

  .arrow-up {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid gray;
    transition: transform 0.5s ease-in-out;
    ${({ collapse }) => `
    transform: ${collapse ? 'rotate(180deg)' : 'rotate(0deg)'} 
  `}
  }
`;

const StyledList = styled.div<{ length: number }>`
  display: ${({ length }) => (length === 0 ? 'none' : 'flex')};
  justify-content: center;
  width: 100%;
`;

const ColumnItem: React.FC<ColumnItemProps> = ({
  title,
  value,
  collapse,
  collapsed,
  characters,
  loading
}) => (
  <>
    <WrapperColumnItem collapse={collapse} length={value.length} onClick={collapsed}>
      <span className="title">{title}</span>
      {Array.isArray(value) ? <div className="arrow-up" /> : value}
    </WrapperColumnItem>
    {characters ? (
      <StyledList length={value.length}>
        {loading ? '3' : null}
        {collapse && characters.length !== 0 ? characters[0].name : null}
      </StyledList>
    ) : null}
  </>
);

export default ColumnItem;
