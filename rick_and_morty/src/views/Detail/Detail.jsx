import React, { useEffect } from 'react';
import styles from './Detail.module.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail(props) {
  // [
  //   {
  //     id: 506,
  //     name: '',
  //     status: '',
  //     species: '',
  //     type: '',
  //     gender: '',
  //     origin: {
  //       name: '',
  //       url: '',
  //     },
  //     location: {
  //       name: '',
  //       url: '',
  //     },
  //     image: '',
  //     episode: [''],
  //     url: '',
  //     created: '',
  //   },
  // ]
  const [character, setCharacter] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then(response => response.json())
      .then(char => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }, []);

  return (
    <div className={styles.detail}>
      {character.name ? (
        <div className={styles.containerDetail}>
          <div className={styles.containerText}>
            {character.id ? (
              <h2 className={styles.text}>ID: {character.id}</h2>
            ) : (
              <h2 className={styles.text}>ID: Not defined</h2>
            )}
            {character.name ? (
              <h2 className={styles.text}>Name: {character.name}</h2>
            ) : (
              <h2 className={styles.text}>Name: Not defined</h2>
            )}
            {character.status ? (
              <h2 className={styles.text}>Status: {character.status}</h2>
            ) : (
              <h2 className={styles.text}>Status: Not defined</h2>
            )}
            {character.species ? (
              <h2 className={styles.text}>Species: {character.species}</h2>
            ) : (
              <h2 className={styles.text}>Species: Not defined</h2>
            )}
            {character.type ? (
              <h2 className={styles.text}>Type: {character.type}</h2>
            ) : (
              <h2 className={styles.text}>Type: Not defined</h2>
            )}
            {character.gender ? (
              <h2 className={styles.text}>Gender: {character.gender}</h2>
            ) : (
              <h2 className={styles.text}>Gender: Not defined</h2>
            )}
            {character.location?.name ? (
              <h2 className={styles.text}>
                Location:{' '}
                <a
                  href={character.location?.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {character.location?.name}
                </a>
              </h2>
            ) : (
              <h2 className={styles.text}>Location: Not defined</h2>
            )}
            {character.origin?.name ? (
              <h2 className={styles.text}>
                <a
                  href={character.origin?.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Origin: {character.origin?.name}
                </a>
              </h2>
            ) : (
              <h2 className={styles.text}>Origin: Not defined</h2>
            )}
            {character.created ? (
              <h2 className={styles.text}>
                Created: {character.created.substring(0, 10)}
              </h2>
            ) : (
              <h2 className={styles.text}>Created: Not defined</h2>
            )}
          </div>

          <img
            className={styles.img}
            src={character.image}
            alt={`Imagen character ${character.name}`}
          />
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
