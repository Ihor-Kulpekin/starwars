import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

export const PrivateRoute = ({children, path }:{children: any, path: string}) => {
  const isAuth = useSelector((state: any) => !!state.auth.user)
  return (
    <Route path={path}>
    {
      isAuth ? (
        children
      ) : (
        <Redirect to='/login' />
      )
    }
    </Route>
  )
};
