import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
  function handDelete() {
    props.onClose(props.id);
  }

  return (
    <div className={styles.card}>
      
        <div>
          <div className={styles.btnContainer}>
            <span className={styles.id}>{props.id}</span>
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
