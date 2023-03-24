import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <Link to='/characters'>
      <div className={styles.container}>
        <img
          src='https://coolthemestores.com/wp-content/uploads/2021/05/rick-and-morty-chrome-theme-wallpaper.jpg'
          alt='home'
        />
      </div>
    </Link>
  );
};

export default Home;
