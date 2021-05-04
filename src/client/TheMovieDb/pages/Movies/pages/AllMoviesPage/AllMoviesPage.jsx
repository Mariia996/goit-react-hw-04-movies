import React, { Component } from 'react';

import { initialState } from './initialState';
import {getTrendingMovies} from '../../../../service/movies';
import MoviesList from '../../components/AllMoviesList/MoviesList';

import PropTypes from 'prop-types';

import styles from './AllMoviesPage.module.css';

class AllMoviesPage extends Component {
    state = {...initialState}

    componentDidMount() {
        this.setState({
            loading: true
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { loading, page } = this.state;
        if (loading) {
            const imagesRequest = getTrendingMovies(page);
            imagesRequest
                .then(({ data }) => {
                        this.setState(({ movies }) => {
                            return {
                            loading: false,
                            movies: [...movies, ...data.results]
                        }
                    })
                })
                .catch(error => {
                    this.setState({
                        loading: false,
                        error
                })
            })
        }
    }

    render() {
        const { movies, loading, error } = this.state;

        return (
            <div className={styles.container}>
                {!loading && !error && <MoviesList movies={movies} />}
                {error && <p className={styles.errorMessage}>Something was wrong</p>}
            </div>
        )
    }
}

AllMoviesPage.defaultProps = {
    movies: [{
        id: "",
        original_title: "Movies not found",
    }],
    loading: false,
    error: null,
    page: 1
}

AllMoviesPage.propTypes = {
    movies: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    page: PropTypes.number.isRequired,
    query: PropTypes.string
}

export default AllMoviesPage;