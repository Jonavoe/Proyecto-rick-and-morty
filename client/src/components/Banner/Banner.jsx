import React from 'react';
import styles from './Banner.module.css';
export default function Banner() {
  return (
    <div className={styles.img}>
      <img
        src='https://i.redd.it/o6cwlzg3exk41.png'
        alt='banner'
        className={styles.banner}
      />
    </div>
  );
}
