import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Favorites.module.css';
import Card from '../Card/Card';
import { fiterCards, orderCards } from '../../redux/actions';

export default function Favorites() {
  const dispatch = useDispatch();

  function orderByCharacters(event) {
    dispatch(orderCards(event.target.value));
  }

  function filterCharacters(event) {
    dispatch(fiterCards(event.target.value));
  }

  const myFavorites = useSelector(state => state.myFavorites);
  const char = myFavorites.map(({ id, name, species, gender, image }) => (
    <Card
      key={id}
      id={id}
      name={name}
      species={species}
      gender={gender}
      image={image}
    />
  ));

  return (
    <div>
      <div className={styles.title}>
        <h2>My Favorites</h2>
      </div>
      <div>
        <select onChange={orderByCharacters} name='Order'>
          <option value='Ascendente'>Ascendente</option>
          <option value='Descendente'>Descendente</option>
        </select>
        <select onChange={filterCharacters} name='Filter'>
          <option value='All'>All</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Genderless'>Genderless</option>
          <option value='unknown'>unknown</option>
        </select>
      </div>
      <div className={styles.cards}>{char}</div>
    </div>
  );
}
