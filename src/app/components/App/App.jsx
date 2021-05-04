import React, { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { routes } from './routes';
import Navbar from '../../../client/TheMovieDb/components/Navbar/components/Navbar';

import HomePage from '../../../client/TheMovieDb/pages/HomePage';
import MoviesPage from '../../../client/TheMovieDb/pages/MoviesPage';
import MovieDetailsPage from '../../../client/TheMovieDb/pages/MovieDetailsPage';

function App() {
  const { home, movies, movieDetails, cast, reviews } = routes;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={home} render={props => <HomePage {...props} />} />
        <Route  exact path={movieDetails} component={MovieDetailsPage} />
        <Route  exact path={movies} component={MoviesPage} />
        <Route path={cast} component={MovieDetailsPage} />
        <Route path={reviews} component={MovieDetailsPage}/>
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;