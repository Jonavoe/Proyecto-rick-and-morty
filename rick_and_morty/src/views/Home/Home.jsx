import React from 'react';
import Banner from '../../components/Banner/Banner';
import {Link} from 'react-router-dom'

const Home = props => {
  return (
    <div>
      <Link to='/characters'>
      <img src='https://coolthemestores.com/wp-content/uploads/2021/05/rick-and-morty-chrome-theme-wallpaper.jpg' />
      </Link>
    </div>
  );
};

export default Home;
