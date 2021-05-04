import React, {Component} from 'react';

import FormSearchMovie from '../Movies/components/FormSearchMovie/FormSearchMovie';
import { searchMovieByName } from '../../service/movies';
import MoviesList from '../Movies/components/AllMoviesList/MoviesList';

import styles from './MoviesPage.module.css';

class MoviesPage extends Component {
    state = {
        movies: [],
        error: null,
        loading: false,
        query: ""
    }

    componentDidUpdate(prevProps, prevState) {
        const { loading, query } = this.state;
        if (loading) {
            const searchMoviesRequest = searchMovieByName(query);
            searchMoviesRequest
                .then(response => {
                console.log(response);
                    this.setState({
                        movies: response.data.results,
                        loading: false
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

    handleSubmit = ({query}) => {
        this.setState({
            loading: true,
            query
        })

    }

    render() {
        const { movies, error, query } = this.state;
        const { handleSubmit } = this;

        return(
            <div className={styles.container}>
                <FormSearchMovie onSubmit={handleSubmit} />
                {!error && <MoviesList movies={movies}/>}
                {error && <p className={styles.errorMessage}>Something was wrong</p>}
            </div>
         );
    }
}

export default MoviesPage;