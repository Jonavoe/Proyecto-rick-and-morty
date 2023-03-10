import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';
import validate from './validation.js';

const Form = props => {
  const [userData, setUserData] = useState({ username: '', password: '' });

  const [errors, setErrors] = useState({ username: '',password: ''  });

  const handleChange = event => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });

    validate({ ...userData, [property]: value }, setErrors, errors);
  };


  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  let username = 'voeffray.jonathan@gmail.com';
  let password = 'hola123';

  
  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/home');
    }
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate, userData]);
  
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  

  return (
    <div className={styles.containerForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputSpan}>

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
