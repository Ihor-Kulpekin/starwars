import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getFilms } from '../../actions/actions';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CircleProgress } from '../../components/CircleProgress/CircleProgress';
import ListFilms from '../../components/ListFilms/ListFilms';
import { Wrapper } from '../../styled-components/styled-components';

const WrapperFilms = styled(Wrapper)`
  min-height: calc(75vh - 90px);
`;

const FilmsPage = () => {
  const dispatch = useDispatch();
  const {films, next, previous, loading} = useSelector((state: RootState) => state.films);

  const fetchFilms = () => {
    dispatch(getFilms(''));
  };

  useEffect(fetchFilms,[]);

  return (
    <WrapperFilms>
      {
        loading? <CircleProgress />: <ListFilms films={films} next={next} previous={previous}/>
      }
    </WrapperFilms>
  );
};

export default FilmsPage;
