import React from 'react';

import styles from './MovieReviewsItem.module.css';

const MovieReviewsItem = ({author, content}) => {
    return (
        <li className={styles.reviewItem}>
            <h2 className={styles.author}>Author: {author}</h2>
            <p className={styles.textReview}>{content}</p>
        </li>
     );
}

export default MovieReviewsItem;