import React from 'react';
import styled from 'styled-components';
import { FilmsTypes } from '../types/filmsTypes';

interface DetailsUniversalProps {
  item: FilmsTypes,
  columns: any
}

const WrapperUniversal = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  max-width: 400px;
  min-height: calc(75vh - 100px);
`;

const DetailsUniversal: React.FC<DetailsUniversalProps> = ({ item, columns }) => {
  return (
    <WrapperUniversal>
      {
        columns.map((column: any) => {
          return column.render({
            item
          })
        })
      }
    </WrapperUniversal>
  );
};

export default DetailsUniversal;
