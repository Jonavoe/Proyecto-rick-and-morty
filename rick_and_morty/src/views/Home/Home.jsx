import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div className={styles.container}>
      <Link to='/characters'>
        <img
          src='https://coolthemestores.com/wp-content/uploads/2021/05/rick-and-morty-chrome-theme-wallpaper.jpg'
          alt='home'
        />
      </Link>
    </div>
  );
};

export default Home;
