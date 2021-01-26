import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

export const PublicRoute = ({children, path, exact }: {children: any, path: string, exact: boolean}) => {
  const isAuth = useSelector((state: any) => !!state.auth.user)
  return (
    <Route path={path} exact={exact}>
      {
        !isAuth  ? (
          children
        ) : (
          <Redirect to='/console' />
        )
      }
    </Route>
  )
};
