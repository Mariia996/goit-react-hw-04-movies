import React from 'react';
import { Link } from "react-router-dom";

import styles from './MoviesItem.module.css';

const MoviesItem = ({ movies }) => {
    return (movies.map(({ original_title, id, poster_path }) => {
    return (<li className={styles.movieItem} key={id}>
        <Link to={{
            pathname: `movies/${id}`,
        }}
            className={styles.movieLink}>
            <img src={poster_path === null ? "https://www.vorotnet.com.ua/catalog/view/theme/vorotnet-theme/image/notfound.png" : `https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={original_title} className={styles.movieImg} />
            <p className={styles.movieTitle}>{original_title}</p>
        </Link>
    </li>)
    })
    );
}

export default MoviesItem;