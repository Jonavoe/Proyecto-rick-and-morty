import React from 'react';
import styles from './About.module.css';

export default function About(){
  return (
    <div className={styles.about}>
      <p className={styles.text}>
        Si eres fanático de la serie de televisión "Rick y Morty", entonces no
        te puedes perder esta página web. En ella, podrás encontrar información
        detallada de todos los personajes de la serie, así como también imágenes
        y curiosidades sobre cada uno de ellos. La página cuenta con un diseño
        atractivo e intuitivo, lo que te permitirá navegar fácilmente por ella y
        encontrar toda la información que necesitas. Además, también puedes
        realizar búsquedas de personajes específicos mediante su ID o nombre, lo
        que te ahorrará tiempo y esfuerzo. Pero eso no es todo, también puedes
        generar personajes aleatorios y agregarlos a una lista de tus personajes
        favoritos. De esta manera, podrás tener siempre a mano la información de
        tus personajes preferidos y compartirlos con tus amigos y familiares. No
        pierdas más tiempo y visita nuestra página web ahora mismo para explorar
        todo lo que tiene que ofrecer. ¡Estamos seguros de que te encantará!
      </p>
    </div>
  );
};
