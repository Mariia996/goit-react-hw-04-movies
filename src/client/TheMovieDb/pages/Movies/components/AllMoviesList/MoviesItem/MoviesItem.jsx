import React from 'react';
import { Link, withRouter } from "react-router-dom";

import styles from './MoviesItem.module.css';

const MoviesItem = ({ movies, location }) => {
    return (movies.map(({ title, id, poster_path, original_name }) => {
    return (<li className={styles.movieItem} key={id}>
        <Link to={{
            pathname: `movies/${id}`,
            state: {
                from: location
            }
        }}
            className={styles.movieLink}>
            <div className={styles.imgContainer}>
                <img src={poster_path === null ? "https://www.vorotnet.com.ua/catalog/view/theme/vorotnet-theme/image/notfound.png" : `https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title} className={styles.movieImg} />
            </div>
            <p className={styles.movieTitle}>{title ? title : original_name}</p>
        </Link>
    </li>)
    })
    );
}

export default withRouter(MoviesItem);