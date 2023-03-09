import React, { useState } from 'react';
import styles from './Random.module.css';

export default function Random(props) {
  const [randonNumber, setRandomNumber] = useState(0);

  function randomNumber() {
    const newRandomNumber = Math.floor(Math.random() * 826) + 1;
    setRandomNumber(newRandomNumber);
    props.onClick(newRandomNumber);
  }

  return (
    <div className={styles.btnRandom}>
      <button onClick={randomNumber} className={styles.btn}>
        PERSONAJE ALEATORIO {randonNumber}
      </button>
    </div>
  );
}
