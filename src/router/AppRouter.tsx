import React from 'react';
import {Switch} from 'react-router-dom';
import { PublicRoute } from "./PublicRoute";
import LoginPage from "../pages/Login/LoginPage";
import Landing from "../pages/Landing/Landing";
import FilmsPage from '../pages/FilmsPage/FilmsPage';

const AppRouter = () => (
    <Switch>
      <PublicRoute path="/" exact={true}>
        <Landing />
      </PublicRoute>
      <PublicRoute path="/login" exact={true}>
        <LoginPage />
      </PublicRoute>
      <PublicRoute path="/films" exact={true}>
        <FilmsPage />
      </PublicRoute>
      <PublicRoute path="/characters" exact={true}>
        <FilmsPage />
      </PublicRoute>
    </Switch>
);

export default AppRouter;
