import SearchBar from '../SeachBar/SearchBar';
import Random from '../Random/Random';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
// import img from '../../img/icono.png';

export default function Nav(props) {
  return (
    <div className={styles.containerNav}>
      <div className={styles.nav}>
        <div className={styles.containerList}>
          {/* <Link to='/home'>
            <img className={styles.icono} src={img} alt='icono' />
          </Link> */}
          <ul className={styles.linkUl}>
            <Link className={styles.link} to='/characters'>
              <li>Characters</li>
            </Link>
            <Link className={styles.link} to='/about'>
              <li>About</li>
            </Link>
            <Link className={styles.link} to='/Favorites'>
              <li>Favorites</li>
            </Link>
            <li>
              <button className={styles.btn} onClick={props.logOut}>
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.containerButton}>
        <SearchBar onSearch={props.value} />
        <Random onClick={props.randomSearch} />
      </div>
    </div>
  );
}
