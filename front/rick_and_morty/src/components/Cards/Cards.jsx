import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards({ characters, onClose }) {
  const reverseCharacters = [...characters].reverse();
  return (
    <div className={styles.cards}>
      {reverseCharacters.map(character => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
