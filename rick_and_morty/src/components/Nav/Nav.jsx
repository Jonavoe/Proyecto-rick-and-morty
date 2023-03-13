import SearchBar from '../SeachBar/SearchBar';
import Random from '../Random/Random';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
import img from '../../img/icono.png'

export default function Nav(props) {
  const logOut = () => {
    props.setAccess(false);
  };
  return (
    <div className={styles.nav}>
      <Link to='/home'>
        <img className={styles.icono} src={img} alt='icono' />
        {/* <img
          className={styles.imgIcon}
          src='https://w7.pngwing.com/pngs/479/224/png-transparent-rick-and-morty-rick-sanchez-rick-and-morty-season-3-adult-swim-rick-and-morty-season-2-episode-rick-and-morty-grass-fictional-character-cartoon.png'
          alt='Home'
        /> */}
      </Link>
      <ul className={styles.linkUl}>
        <Link className={styles.link} to='/characters'>
          <li>Characters</li>
        </Link>
        <Link className={styles.link} to='/about'>
          <li>About</li>
        </Link>
        <li>
          <button onClick={logOut} className={styles.btn}>
            Log out
          </button>
        </li>
      </ul>
      <SearchBar onSearch={props.value} />
      <Random onClick={props.randomSearch} />
    </div>
  );
}
