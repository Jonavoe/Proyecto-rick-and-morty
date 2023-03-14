import styles from './Card.module.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacters, removeCharacters } from '../../redux/reducer';

import heart from '../../img/heart.png';
import heartWhite from '../../img/heart white.png';

export default function Card(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  function handDelete() {
    props.onClose(props.id);
  }

  function addFav() {
    dispatch(addCharacters(props));
  }

  function delFav() {
    dispatch(removeCharacters(props.id));
  }

  useEffect(() => {
    const favExists = myFavorites.some(char => char.id === props.id);
    setIsFav(favExists);
  }, [myFavorites, props.id]);

  return (
    <div className={styles.card}>
      <div>
        <div className={styles.btnContainer}>
          <span className={styles.id}>{props.id}</span>
          {isFav ? (
            <button onClick={delFav} className={styles.btnImg}>
              <img src={heartWhite} alt='Favoritos' />
            </button>
          ) : (
            <button onClick={addFav} className={styles.btnImg}>
              <img src={heart} alt='Favoritos' />
            </button>
          )}
          <button onClick={handDelete} className={styles.btn}>
            X
          </button>
        </div>
        <Link className={styles.link} to={`/detail/${props.id}`}>
          <div className={styles.img}>
            <img src={props.image} alt={props.name} />
          </div>
        </Link>
      </div>
      <Link className={styles.link} to={`/detail/${props.id}`}>
        <div className={styles.text}>
          <h2>Name: {props.name}</h2>
          <h2>Species: {props.species}</h2>
          <h2>Gender: {props.gender}</h2>
        </div>
      </Link>
    </div>
  );
}
