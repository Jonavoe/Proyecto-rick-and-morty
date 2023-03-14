import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Favorites.module.css';

export default function Favorites(props) {
  const myFavorites = useSelector(state => state.myFavorites);

  return (
    <div>
      <div className={styles.title}>
        <h2>My Favorites</h2>
      </div>
      <div className={styles.cards}>
        {myFavorites.map(char => (
          <div className={styles.card}>
            <div key={char.id} className={styles.item}>
              <div className={styles.img}>
                <img src={char.image} alt={char.name} />
              </div>
              <div className={styles.text}>
                <h2>{`Name: ${char.name}`}</h2>
                <h2>{`Species: ${char.species}`}</h2>
                <h2>{`Gender: ${char.gender}`}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
