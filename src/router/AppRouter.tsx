import React from 'react';
import {Switch} from 'react-router-dom';
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import ConsolePage from "../pages/ConsolePage";
import LoginPage from "../pages/Login/LoginPage";
import Landing from "../pages/Landing/Landing";

const AppRouter = () => (
    <Switch>
      <PublicRoute path="/" exact={true}>
        <Landing />
      </PublicRoute>
      <PublicRoute path="/login" exact={true}>
        <LoginPage />
      </PublicRoute>
      <PrivateRoute path="/console">
        <ConsolePage />
      </PrivateRoute>
    </Switch>
);

export default AppRouter;
