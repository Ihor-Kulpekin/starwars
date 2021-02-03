import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import styled from 'styled-components';
import Input from '../molecules/Input';

export const WrapperList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: calc(70vh - 90px);
  max-width: 1280px;
  margin: 0 auto;
`;

const withData = (
  Component: React.FC<any>,
  selector: (state: RootState) => void,
  action: Function,
  actionSuccess: Function,
  actionFailure: Function,
  url: string
) => {
  return () => {
    const data = useSelector<RootState>(selector);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const fetchData = (value?:string) => {
      dispatch(action(value,actionSuccess, actionFailure, url));
    };

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
      setValue(event.target.value)
      fetchData(event.target.value)
    }

    useEffect(fetchData, [dispatch]);

    return (
      <>
        <Input value={value} onChange={handleChange} placeholder="Search..."/>
        <WrapperList>
          <Component data={data} />
        </WrapperList>
      </>
    );
  };
};

export default withData;
