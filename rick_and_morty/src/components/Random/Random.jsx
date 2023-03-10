import React, { useState } from 'react';
import styles from './Random.module.css';

export default function Random(props) {
  const [randomNumber, setRandomNumber] = useState(0);

  function newNumber() {
    const newRandomNumber = Math.floor(Math.random() * 826) + 1;
    setRandomNumber(newRandomNumber);
    props.onClick(newRandomNumber);
  }

  return (
    <div className={styles.btnRandom}>
      <button onClick={newNumber} className={styles.btn}>
      🃏Get a Card {randomNumber}🃏
      </button>
    </div>
  );
}
