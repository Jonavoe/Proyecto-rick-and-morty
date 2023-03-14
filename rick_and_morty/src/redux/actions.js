import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const ADD_CHARACTERS = 'ADD_CHARACTERS';

export const addCharacters = (data) => {
  return {
    type: ADD_CHARACTERS,
    payload: data
  };
};

export const useFetchCharacters = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then((response) => response.json())
      .then((data) => dispatch(addCharacters(data)))
  }, [dispatch, params.id]);
};

export const CharacterDetails = () => {
  const { id } = useParams();
  const character = useSelector(state => state.characters[id]);

  useFetchCharacters();

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.gender}</p>
    </div>
  );
};
