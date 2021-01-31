import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import styled from 'styled-components';

export const WrapperList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: calc(70vh - 90px);
  max-width: 1280px;
  margin: 0 auto;
`

const withData = (Component: React.FC<any>, selector: (state: RootState) => void, action: Function) => {
  return () => {
    const data = useSelector<RootState>(selector);
    const dispatch = useDispatch();

    const fetchData = () => {
      dispatch(action(''));
    };

    useEffect(fetchData,[])

    return (
      <WrapperList>
        <Component data={data}/>
      </WrapperList>
    );
  };
};

export default withData;
