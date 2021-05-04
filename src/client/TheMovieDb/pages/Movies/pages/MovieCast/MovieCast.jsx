import React, {Component} from 'react';
import PropTypes from 'prop-types';

import MovieCastList from '../../components/MovieCast/MovieCastList';
import { getMovieCredits } from '../../../../service/movies';

import styles from './MovieCast.module.css';

class MovieCast extends Component {
    state = {
        cast: [],
        error: null
    }

    componentDidMount() {
        const { movieId } = this.props.match.params;
        const castRequest = getMovieCredits(movieId);

        castRequest
            .then(response => {
                this.setState({
                    cast: response.data.cast
                })
            })
            .catch(error => {
                this.setState({
                    error
                })
        })
    }

    render() {
        const { error, cast } = this.state;
        console.log(cast);
        return (
        <>
            {!error && <MovieCastList cast={cast} />}
            {cast.length === 0 && <p className={styles.noCastMessage}>We don't have any cast information for this movie.</p>}
            {error && <p className={styles.errorMessage}>Something was wrong</p>}
        </>
        )
    }
}

MovieCast.propTypes = {
    cast: PropTypes.array.isRequired,
    error: PropTypes.object
}

export default MovieCast;