import React from 'react';
import Cards from '../../components/Cards/Cards';

const Characters = (props) => {
  return (
    <Cards characters={props.characters} onClose={props.removeCharacters} />
  );
};

export default Characters;
