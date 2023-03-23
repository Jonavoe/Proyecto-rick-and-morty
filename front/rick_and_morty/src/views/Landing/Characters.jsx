import React from 'react';
import styles from './Characters.module.css';
import Cards from '../../components/Cards/Cards';

const Characters = props => {
  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        <Cards characters={props.characters} onClose={props.removeCharacters} />
      </div>
    </div>
  );
};

export default Characters;
