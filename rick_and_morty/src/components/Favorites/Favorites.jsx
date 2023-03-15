import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Favorites.module.css';
import { addCharacters, removeCharacters } from '../../redux/reducer';

export default function Favorites(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites);
  function delFav(charId) {
    dispatch(removeCharacters(charId));
  }

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
                <button className={styles.btn} onClick={() => delFav(char.id)}>
                  Remove Favorites
                </button>
              <div className={styles.btnContainer}>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
