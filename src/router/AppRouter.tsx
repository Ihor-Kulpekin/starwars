import React from 'react';
import {Switch} from 'react-router-dom';
import { PublicRoute } from "./PublicRoute";
import LoginPage from "../pages/Login/LoginPage";
import Landing from "../pages/Landing/Landing";
import FilmsPage from '../pages/FilmsPage/FilmsPage';
import CharactersPage from '../pages/CharactersPage/CharactersPage';
import withData from '../hoc/withData';
import { getFilms, getPeople } from '../actions/actions';

const FilmsPageWithData = withData(FilmsPage, ((state) => state.films), getFilms);
const CharactersPageWithData = withData(CharactersPage,((state => state.people)), getPeople)

const AppRouter = () => (
    <Switch>
      <PublicRoute path="/" exact={true}>
        <Landing />
      </PublicRoute>
      <PublicRoute path="/login" exact={true}>
        <LoginPage />
      </PublicRoute>
      <PublicRoute path="/films" exact={true}>
        <FilmsPageWithData />
      </PublicRoute>
      <PublicRoute path="/characters" exact={true}>
        <CharactersPageWithData />
      </PublicRoute>
    </Switch>
);

export default AppRouter;
