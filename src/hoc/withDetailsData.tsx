import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import filmItem from '../molecules/film_item.jpg';
import useMedia from '../utils/useMedia';

const WrapperDetails = styled.div<any>`
  display: flex;
  justify-content: center;
  flex-direction: ${({mobile})=>mobile?'column':null};
  align-items: ${({mobile})=>mobile?'center':null};
  
  .img {
     height: 400px;
     max-width: ${({mobile})=>mobile?'400px':'500px'};
     margin: ${({mobile})=>mobile?'0 0 40px 0':'0 50px 0 0'};
     img {
        max-width: inherit;
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
    const {mobile} = useMedia();
    const dispatch = useDispatch();
    const { id }: { id: string } = useParams();

    const fetchData = () => {
      dispatch(action(url, id, actionSuccess, actionFailure));
    };

    useEffect(fetchData, [id]);

    return (
      <WrapperDetails mobile={mobile}>
        <div className="img">
          <img src={filmItem} alt="image"/>
        </div>
        <Component data={data} />
      </WrapperDetails>
    );
  };
};

export default withDetailsData;
