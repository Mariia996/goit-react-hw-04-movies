import React from 'react';

import MovieCastItem from '../MovieCastItem';

import styles from './MovieCastList.module.css';

const MovieCastList = ({ cast }) => {
    const castElements = cast.map((item) =>
        <MovieCastItem key={item.id} {...item} />);

    return (
        <ul className={styles.castList}>
            {castElements}
        </ul>
     );
}

export default MovieCastList;