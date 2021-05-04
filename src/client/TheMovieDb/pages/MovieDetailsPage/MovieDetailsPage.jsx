import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import { routes } from '../../../../app/components/App/routes';
import { getMovieDetailsById } from '../../service/movies';
import SingleMoviePage from '../Movies/pages/SingleMoviePage';
import MovieCast from '../Movies/pages/MovieCast';
import MovieReviews from '../Movies/pages/MovieReviews';

import styles from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
    state = {
        movie: [],
        error: null
    }

    componentDidMount() {
        const { movieId } = this.props.match.params;
        const movieRequest = getMovieDetailsById(movieId);
        movieRequest
            .then(response => {
                this.setState({
                    movie: response.data
                })
            })
            .catch(error => {
                this.setState({
                error
            })
        })
    }

    render() {
        const { cast, reviews } = routes;
        const { movie, error } = this.state;
        const { movieId } = this.props.match.params;

        return(
            (<div className={styles.container}>
                {!error && <SingleMoviePage movie={movie} history={this.props.history}/>}
                {!error && (
                    <>
                    <p className={styles.additionalInformation}>Additional Information</p>
                        <ul className={styles.addInfoList}>
                            <li className={styles.addInfoItem}>
                                <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
                            </li>
                            <li className={styles.addInfoItem}>
                                <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
                            </li>
                        </ul>

                        <Route path={cast} render={(props) => <MovieCast {...props}/>} />
                        <Route path={reviews} render={(props)=> <MovieReviews {...props}/>}/>
                    </>
                )}
                {error && <p className={styles.errorMessage}>Something was wrong</p>}
            </div>)
         );
    }
}

export default MovieDetailsPage;