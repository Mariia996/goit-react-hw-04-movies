import React from 'react';

import MoviesGenresItem from '../MoviesGenresItem';

import styles from './MovieGenresList.module.css';

const MovieGenresList = ({ genres }) => {
    const genreElements = genres.map(genre =>
        <MoviesGenresItem key={genre.id} {...genre} />)

    return (<ul className={styles.genresList}>
            {genreElements}
    </ul> );
}

export default MovieGenresList;