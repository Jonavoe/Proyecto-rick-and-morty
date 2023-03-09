import styles from './Card.module.css';

export default function Card({id, name, species, gender, image, onClose }) { 

  function handDelete() {
    onClose(id);
  }

  return (
    <div className={styles.card}>
      <div>
        <div className={styles.btnContainer}>
          <button onClick={handDelete} className={styles.btn}>
            X
          </button>
        </div>
        <div className={styles.img}>
          <img src={image} alt={name} />
        </div>
      </div>
      <div className={styles.text}>
        <h2>Name: {name}</h2>
        <h2>Species: {species}</h2>
        <h2>Gender: {gender}</h2>
      </div>
    </div>
  );
}