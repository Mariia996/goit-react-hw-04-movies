import React from 'react';

import AllMoviesPage from '../Movies/pages/AllMoviesPage';

import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <>
            <h2 className={styles.trendingTitle}>Trending today</h2>
            <AllMoviesPage />
        </>
    )
}

export default HomePage;