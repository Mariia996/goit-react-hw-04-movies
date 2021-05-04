import React from 'react';

import MoviesItem from '../MoviesItem';

import styles from './MoviesList.module.css';

const MoviesList = ({movies}) => {
    return (<ul className={styles.movieList}>
        <MoviesItem movies={movies} />
    </ul> );
}

export default MoviesList;