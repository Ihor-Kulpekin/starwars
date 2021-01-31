import React, { useState } from 'react';
import styled from 'styled-components';
import { FilmsTypes } from 'types/filmsTypes';
import { PeopleTypes } from 'types/peopleTypes';
import { StarshipsTypes } from 'types/starshipsTypes';
import { PlanetsTypes } from 'types/planetsTypes';
import { VehiclesTypes } from 'types/vehiclesTypes';
import { useDispatch, useSelector } from 'react-redux';
import { getDataForDetailsItem, getDataForDetailsItemSuccess, getDataForDetailsItemFailure } from 'actions/actions';
import { getFilmDetailsSelector } from 'selectors/selectors';

interface DetailsUniversalProps {
  item: FilmsTypes | PeopleTypes | StarshipsTypes | PlanetsTypes | VehiclesTypes | any,
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
  const [collapse, setCollapse] = useState(false);
  const dispatch = useDispatch();
  const {characters, loading} = useSelector(getFilmDetailsSelector)

  const collapsed = () => {
    if(characters.length===0){
      dispatch(getDataForDetailsItem(item.characters, getDataForDetailsItemSuccess, getDataForDetailsItemFailure))
    }
    setCollapse(!collapse)
  }

  return (
    <WrapperUniversal>
      {
        columns.map((column: any) => {
          return (
            <React.Fragment key={column.dataIndex}>
              {
                column.isCollapse? (
                  column.render({
                    item,
                    collapsed,
                    collapse,
                    characters,
                    loading
                  })
                ):(
                  column.render({
                    item
                  })
                )
              }
            </React.Fragment>
          )
        })
      }
    </WrapperUniversal>
  );
};

export default DetailsUniversal;
