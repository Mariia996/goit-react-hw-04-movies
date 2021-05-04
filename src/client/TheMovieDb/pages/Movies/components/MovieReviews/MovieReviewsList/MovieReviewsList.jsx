import React from 'react';

import MovieReviewsItem from '../MovieReviewsItem';

import styles from './MovieReviewsList.module.css';

const MovieReviewsList = ({ reviews }) => {

    const reviewsElements = reviews.map(item =>
        <MovieReviewsItem key={item.id} {...item}/>
        )

    return (
        <ul className={styles.reviewsList}>
            {reviewsElements}
        </ul>
     );
}

export default MovieReviewsList;