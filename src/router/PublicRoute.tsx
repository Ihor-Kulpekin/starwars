import React from 'react';
import { Route } from 'react-router-dom';

export const PublicRoute = ({children, path, exact }: {children: any, path: string, exact: boolean}) => {
  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  )
};
