import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Favorites.module.css';
import Card from '../Card/Card';

export default function Favorites(props) {
  const myFavorites = useSelector(state => state.myFavorites);
  const char = myFavorites.map(({id,name,species,gender,image}) => (
    <Card
      key={id}
      id={id}
      name={name}
      species={species}
      gender={gender}
      image={image}
    />
  ))

  return (
    <div>
      <div className={styles.title}>
        <h2>My Favorites</h2>
      </div>
      <div className={styles.cards}>
        {char}
      </div>
    </div>
  );
}
