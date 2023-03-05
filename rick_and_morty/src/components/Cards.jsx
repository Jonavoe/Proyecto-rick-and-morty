import "./SearchBar.css";
import Card from './Card';

export default function Cards(props) {
  const { characters } = props;

  const personajes = characters.map((character) => {
    return <Card key={character.id} {...character} />
  });
  return <div className='character'>
      {personajes}
  </div>;
}
