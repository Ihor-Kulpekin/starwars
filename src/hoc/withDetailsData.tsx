import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import filmItem from '../molecules/film_item.jpg';

const WrapperDetails = styled.div`
  display: flex;
  justify-content: center;
  
  .img {
     height: 400px;
     width: 300px;
     margin-right: 50px;
     img {
        width: inherit;
        height: inherit;
     }
  }
`

const withDetailsData = (
  Component: React.FC<any>,
  selector: (state: RootState) => void,
  action: Function,
  actionSuccess: Function,
  actionFailure: Function,
  url: string
) => {
  return () => {
    const data = useSelector<RootState>(selector);
    const dispatch = useDispatch();
    const { id }: { id: string } = useParams();

    const fetchData = () => {
      dispatch(action(url, id, actionSuccess, actionFailure));
    };

    useEffect(fetchData, [id]);

    return (
      <WrapperDetails>
        <div className="img">
          <img src={filmItem} alt="image"/>
        </div>
        <Component data={data} />
      </WrapperDetails>
    );
  };
};

export default withDetailsData;
