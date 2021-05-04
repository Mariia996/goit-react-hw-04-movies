import React from 'react';

import styles from './MovieCastItem.module.css';

const MovieCastItem = ({ original_name, character = "No information", profile_path}) => {
    return (
        <li className={styles.castItem}>
            <img src={profile_path === null ? "https://www.diabetes.ie/wp-content/uploads/2017/02/no-image-available.png" : `https://image.tmdb.org/t/p/w300/${profile_path}`} alt={original_name} className={styles.castImg}/>
            <p className={styles.castName}>{original_name}</p>
            <p className={styles.character}>Character: {character}</p>
        </li>
     );
}

export default MovieCastItem;