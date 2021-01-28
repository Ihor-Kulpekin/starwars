import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import withData from '../hoc/withData';
import { getFilms, getPeople, getStarships, getPlanets, getVihicles } from '../actions/actions';

const FilmsPage = lazy(() => import('../pages/FilmsPage/FilmsPage'));
const CharactersPage = lazy(() => import('../pages/CharactersPage/CharactersPage'));
const Landing = lazy(() => import('../pages/Landing/Landing'));
const StarshipsPage = lazy(()=> import('../pages/StarshipsPage/StarshipsPage'));
const PlanetsPage = lazy(()=>import('../pages/PlanetsPage/PlanetsPage'));
const VehiclesPage = lazy(()=>import('../pages/VehiclesPage/VehiclesPage'))

const FilmsPageWithData = withData(FilmsPage, (state) => state.films, getFilms);
const CharactersPageWithData = withData(CharactersPage, (state) => state.people, getPeople);
const StarshipsPageWithData = withData(StarshipsPage, (state => state.starships), getStarships)
const PlanetsPageWithData = withData(PlanetsPage,(state => state.planets), getPlanets)
const VehiclesPageWithData = withData(VehiclesPage,(state => state.vehicles),getVihicles)

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
      <PublicRoute path="/starships" exact={true}>
        <StarshipsPageWithData />
      </PublicRoute>
      <PublicRoute path="/planets" exact={true}>
        <PlanetsPageWithData />
      </PublicRoute>
      <PublicRoute path="/vehicles" exact={true}>
        <VehiclesPageWithData />
      </PublicRoute>
    </Switch>
  </Suspense>
);

export default AppRouter;
