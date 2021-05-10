import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { getMoviesReviews } from '../../../../service/movies';
import MovieReviewsList from '../../components/MovieReviews/MovieReviewsList';

import styles from './MovieReviews.module.css';


class MovieReviews extends Component {
    state = {
        reviews: [],
        totalResults: 0,
        error: null
    }

    componentDidMount() {
        const { movieId } = this.props.match.params;
        const reviewsRequest = getMoviesReviews(movieId);


        reviewsRequest
            .then(response => {
                this.setState({
                    reviews: response.data.results,
                    totalResults: response.data.total_results
                })
            })
            .catch(error => {
                this.setState({
                    error
                })
        })
    }

    render() {
        const { reviews, error, totalResults } = this.state;

        return (
            <>
                {!error && <MovieReviewsList reviews={reviews} />}
                {totalResults === 0 && <p className={styles.noReviewsMessage}>We don't have any reviews for this movie.</p>}
                {error && <p className={styles.errorMessage}>Something was wrong</p>}
            </>
        )
    }
}

MovieReviews.defaultProps = {
    reviews: [],
    totalResults: 0,
    error: null
}

MovieReviews.propTypes = {
    reviews: PropTypes.array.isRequired,
    totalResults: PropTypes.number,
    error: PropTypes.object
}

export default MovieReviews;