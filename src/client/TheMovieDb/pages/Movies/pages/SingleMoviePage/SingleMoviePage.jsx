import React from 'react';

import MovieGenresList from '../../components/MoviesGenres/MovieGenresList';
import GoBackButton from '../../../../../../shared/components/GoBackButton';

import styles from './SingleMoviePage.module.css';

const SingleMoviePage = ({ movie, history, genres }) => {
    const { poster_path, original_title, vote_average, overview } = movie;

    return (
        <>
        <GoBackButton history={history}/>
        <div className={styles.contentContainer}>
                <div className={styles.imgContainer}>
                <img src={poster_path === null ? "https://www.vorotnet.com.ua/catalog/view/theme/vorotnet-theme/image/notfound.png" : `https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={original_title} />
                </div>
                <div className={styles.movieContent}>
                        <h2 className={styles.movieTitle}>{original_title}</h2>
                        <p className={styles.userScore}>User score: {vote_average}</p>
                    <h3 className={styles.overview}>Overview</h3>
                        <p className={styles.overviewText}>{overview}</p>
                    <h3 className={styles.genres}>Genres</h3>
                        <MovieGenresList genres={genres}/>
                </div>
            </div>
            </>
     );
}

export default SingleMoviePage;