import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import withData from 'hoc/withData';
import {
  getFilms,
  getPeople,
  getStarships,
  getPlanets,
  getVihicles,
  getDetailsFilm,
  getDetailsFilmSuccess,
  getDetailsFilmFailure,
  getCharacterDetails,
  getCharacterDetailsSuccess,
  getCharacterDetailsFailure,
  getStarshipDetails,
  getStarshipDetailsSuccess,
  getStarshipDetailsFailure,
  getPlanetDetails,
  getPLanetDetailsSuccess,
  getPLanetDetailsFailure,
  getVehicleDetails,
  getVehicleDetailsSuccess,
  getVehicleDetailsFailure,
  getFilmsSuccess,
  getFilmsFailure,
  getPeopleSuccess,
  getPeopleFailure,
  getStarshipsSuccess,
  getStarshipsFailure,
  getPlanetsSuccess,
  getPlanetsFailure,
  getVehiclesSuccess,
  getVehiclesFailure
} from 'actions/actions';
import withDetailsData from 'hoc/withDetailsData';
import {
  getCharacterDetailsSelector,
  getFilmDetailsSelector,
  getFilmsSelector,
  getPeopleSelector,
  getPlanetDetailsSelector,
  getPlanetsSelector,
  getPlanetsVehicle,
  getStarshipDetailsSelector,
  getStarshipsSelector,
  getVehicleDetailsSelector
} from 'selectors/selectors';

const FilmsPage = lazy(() => import('pages/FilmsPage/FilmsPage'));
const CharactersPage = lazy(() => import('pages/CharactersPage/CharactersPage'));
const Landing = lazy(() => import('pages/Landing/Landing'));
const StarshipsPage = lazy(() => import('pages/StarshipsPage/StarshipsPage'));
const PlanetsPage = lazy(() => import('pages/PlanetsPage/PlanetsPage'));
const VehiclesPage = lazy(() => import('pages/VehiclesPage/VehiclesPage'));
const FilmDetailsPage = lazy(() => import('pages/FilmDetailsPage/FilmDetailsPage'));
const CharacterDetailsPage = lazy(() => import('pages/CharacterDetailsPage/CharacterDetailsPage'));
const StarshipDetailsPage = lazy(() => import('pages/StarshipDetailsPage/StarshipDetailsPage'));
const PlanetDetailsPage = lazy(() => import('pages/PlanetDetailsPage/PlanetDetailsPage'));
const VehicleDetailsPage = lazy(() => import('pages/VehicleDetailsPage/VehicleDetailsPage'));
const LoginPage = lazy(()=>import('pages/Login/LoginPage'))

const FilmsPageWithData = withData(
  FilmsPage,
  getFilmsSelector,
  getFilms,
  getFilmsSuccess,
  getFilmsFailure,
  'https://swapi.dev/api/films/'
);
const CharactersPageWithData = withData(
  CharactersPage,
  getPeopleSelector,
  getPeople,
  getPeopleSuccess,
  getPeopleFailure,
  'https://swapi.dev/api/people/'
);
const StarshipsPageWithData = withData(
  StarshipsPage,
  getStarshipsSelector,
  getStarships,
  getStarshipsSuccess,
  getStarshipsFailure,
  'https://swapi.dev/api/starships/'
);
const PlanetsPageWithData = withData(
  PlanetsPage,
  getPlanetsSelector,
  getPlanets,
  getPlanetsSuccess,
  getPlanetsFailure,
  'https://swapi.dev/api/planets/'
);
const VehiclesPageWithData = withData(
  VehiclesPage,
  getPlanetsVehicle,
  getVihicles,
  getVehiclesSuccess,
  getVehiclesFailure,
  'https://swapi.dev/api/vehicles/'
);

const FilmDetailsPageWithDetailsData = withDetailsData(
  FilmDetailsPage,
  getFilmDetailsSelector,
  getDetailsFilm,
  getDetailsFilmSuccess,
  getDetailsFilmFailure,
  'https://swapi.dev/api/films/'
);

const CharacterDetailsPageWithDetailsData = withDetailsData(
  CharacterDetailsPage,
  getCharacterDetailsSelector,
  getCharacterDetails,
  getCharacterDetailsSuccess,
  getCharacterDetailsFailure,
  'https://swapi.dev/api/people/'
);

const StarshipDetailsPageWithDetailsData = withDetailsData(
  StarshipDetailsPage,
  getStarshipDetailsSelector,
  getStarshipDetails,
  getStarshipDetailsSuccess,
  getStarshipDetailsFailure,
  'https://swapi.dev/api/starships/'
);

const PlanetDetailsPageWithDetailsData = withDetailsData(
  PlanetDetailsPage,
  getPlanetDetailsSelector,
  getPlanetDetails,
  getPLanetDetailsSuccess,
  getPLanetDetailsFailure,
  'https://swapi.dev/api/planets/'
);

const VehicleDetailsPageWithDetailsData = withDetailsData(
  VehicleDetailsPage,
  getVehicleDetailsSelector,
  getVehicleDetails,
  getVehicleDetailsSuccess,
  getVehicleDetailsFailure,
  'https://swapi.dev/api/vehicles/'
);

const AppRouter = () => (
  <Suspense fallback={<div>...Loading</div>}>
    <Switch>
      <PublicRoute path="/" exact={true}>
        <Landing />
      </PublicRoute>
      <PublicRoute path="/films" exact={true}>
        <FilmsPageWithData />
      </PublicRoute>
      <PublicRoute path="/films/:id" exact={true}>
        <FilmDetailsPageWithDetailsData />
      </PublicRoute>
      <PublicRoute path="/characters" exact={true}>
        <CharactersPageWithData />
      </PublicRoute>
      <PublicRoute path="/characters/:id" exact={true}>
        <CharacterDetailsPageWithDetailsData />
      </PublicRoute>
      <PublicRoute path="/starships" exact={true}>
        <StarshipsPageWithData />
      </PublicRoute>
      <PublicRoute path="/starships/:id" exact={true}>
        <StarshipDetailsPageWithDetailsData />
      </PublicRoute>
      <PublicRoute path="/planets" exact={true}>
        <PlanetsPageWithData />
      </PublicRoute>
      <PublicRoute path="/planets/:id" exact={true}>
        <PlanetDetailsPageWithDetailsData />
      </PublicRoute>
      <PublicRoute path="/vehicles" exact={true}>
        <VehiclesPageWithData />
      </PublicRoute>
      <PublicRoute path="/vehicles/:id" exact={true}>
        <VehicleDetailsPageWithDetailsData />
      </PublicRoute>
      <PublicRoute path="/login" exact={true}>
        <LoginPage />
      </PublicRoute>
    </Switch>
  </Suspense>
);

export default AppRouter;
