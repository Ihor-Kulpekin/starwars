import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useParams } from 'react-router-dom';
import { WrapperList } from './withData';
import styled from 'styled-components';

const WrapperDetails = styled.div`
  display: flex;
  justify-content: center;
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

    useEffect(fetchData, []);

    return (
      <WrapperList>

        <Component data={data} />
      </WrapperList>
    );
  };
};

export default withDetailsData;
