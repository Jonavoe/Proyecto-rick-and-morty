import SearchBar from '../SeachBar/SearchBar';
import Random from '../Random/Random';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <div className={styles.nav}>
      <ul className={styles.linkUl}>
        <Link className={styles.link} to='/'>
          <li><img className={styles.imgIcon} src='https://w7.pngwing.com/pngs/479/224/png-transparent-rick-and-morty-rick-sanchez-rick-and-morty-season-3-adult-swim-rick-and-morty-season-2-episode-rick-and-morty-grass-fictional-character-cartoon.png' alt= 'Home' /></li>
        </Link>
        <Link className={styles.link} to='/characters'>
          <li>Characters</li>
        </Link>
        <Link className={styles.link} to='/about'>
          <li>About</li>
        </Link>
      </ul>
      <SearchBar onSearch={props.value} />
      <Random onClick={props.randomSearch} />
    </div>
  );
}
