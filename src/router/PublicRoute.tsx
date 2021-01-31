import React from 'react';
import { Route } from 'react-router-dom';
import { Wrapper } from 'styled-components/styled-components';

export const PublicRoute = ({children, path, exact }: {children: any, path: string, exact: boolean}) => {
  return (
    <Route path={path} exact={exact}>
      <Wrapper>
        {children}
      </Wrapper>
    </Route>
  )
};
