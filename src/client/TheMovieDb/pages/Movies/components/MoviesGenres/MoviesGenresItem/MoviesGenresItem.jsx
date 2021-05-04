import React from 'react';

import styles from './MoviesGenresItem.module.css';

const MoviesGenresItem = ({ name }) => {
    return (
        <li className={styles.genresItem}>
            <span className={styles.genreText}>{name}</span>
        </li>
    )

}

export default MoviesGenresItem;