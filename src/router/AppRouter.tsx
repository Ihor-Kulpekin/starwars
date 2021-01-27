import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import withData from '../hoc/withData';
import { getFilms, getPeople } from '../actions/actions';

const FilmsPage = lazy(() => import('../pages/FilmsPage/FilmsPage'));
const CharactersPage = lazy(() => import('../pages/CharactersPage/CharactersPage'));
const Landing = lazy(() => import('../pages/Landing/Landing'));

const FilmsPageWithData = withData(FilmsPage, (state) => state.films, getFilms);
const CharactersPageWithData = withData(CharactersPage, (state) => state.people, getPeople);

const AppRouter = () => (
  <Suspense fallback={<div>...Loading</div>}>
    <Switch>
      <PublicRoute path="/" exact={true}>
        <Landing />
      </PublicRoute>
      <PublicRoute path="/films" exact={true}>
        <FilmsPageWithData />
      </PublicRoute>
      <PublicRoute path="/characters" exact={true}>
        <CharactersPageWithData />
      </PublicRoute>
    </Switch>
  </Suspense>
);

export default AppRouter;
