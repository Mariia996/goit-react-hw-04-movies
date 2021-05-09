import React, { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { routes } from './routes';
import Navbar from '../../../client/TheMovieDb/components/Navbar/components/Navbar';
import Loading from '../../../shared/components/Loading';

const HomePage = lazy(() => import('../../../client/TheMovieDb/pages/HomePage' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('../../../client/TheMovieDb/pages/MoviesPage' /* webpackChunkName: "MoviesPage" */));
const MovieDetailsPage = lazy(() => import('../../../client/TheMovieDb/pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */));

function App() {
  const { home, movies, movieDetails, cast, reviews } = routes;
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={home} render={props => <HomePage {...props} />} />
          <Route  exact path={movieDetails} component={MovieDetailsPage} />
          <Route  exact path={movies} component={MoviesPage} />
          <Route path={cast} component={MovieDetailsPage} />
          <Route path={reviews} component={MovieDetailsPage}/>
          <Route component={HomePage} />
          </Switch>
        </Suspense>
    </Router>
  );
}

export default App;