import React, { useState } from 'react';
import styles from './Form.module.css';
import validate from './validation.js';

const Form = ({ login }) => {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleChange = event => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });

    validate({ ...userData, [property]: value }, setErrors, errors);
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.containerForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputSpan}>
          <label htmlFor='username' className={styles.label}>
            Presione login, falta creacion de usuarios!
          </label>
          <label htmlFor='username' className={styles.label}>
            Username
          </label>
          <input
            name='username'
            className={styles.input}
            type='text'
            value={userData.username}
            onChange={handleChange}
          />
          <span
            className={
              errors.username && userData.username
                ? styles.userInvalid
                : styles.userNone
            }
          >
            {errors.username}
          </span>
          <span
            className={
              !errors.username && userData.username
                ? styles.userSuccess
                : styles.userNone
            }
          >
            Username correcto
          </span>
        </div>

        <label htmlFor='password' className={styles.label}>
          password
        </label>
        <input
          name='password'
          className={styles.input}
          type='text'
          value={userData.password}
          onChange={handleChange}
        />
        <span
          className={
            errors.password && userData.password
              ? styles.userInvalid
              : styles.userNone
          }
        >
          {errors.password}
        </span>
        <span
          className={
            !errors.password && userData.password
              ? styles.userSuccess
              : styles.userNone
          }
        >
          Password correcto
        </span>
        <button className={styles.btn}>Login</button>
      </form>
    </div>
  );
};

export default Form;
