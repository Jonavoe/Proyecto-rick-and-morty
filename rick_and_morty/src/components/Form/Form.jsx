import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';

const validate = (form, setErrorsUser, errorsUser) => {
  if (!form.username)
    setErrorsUser({ ...errorsUser, username: 'Username vacio' });
  else {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/.test(form.username))
      setErrorsUser({ ...errorsUser, username: '' });
    else setErrorsUser({ ...errorsUser, username: 'Username Invalido' });
  }
};

const validatePass = (form, setErrorsPass, errorsPass) => {
  if (/^(?=.*\d)[a-zA-Z\d]{6,10}$/.test(form.password))
    setErrorsPass({ ...errorsPass, password: '' });
  else setErrorsPass({ ...errorsPass, password: 'Password Invalido' });
};
const Form = props => {
  const [userData, setUserData] = useState({ username: '', password: '' });

  const [errorsUser, setErrorsUser] = useState({ username: '' });
  const [errorsPass, setErrorsPass] = useState({ password: '' });

  const handleChange = event => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });

    validate({ ...userData, [property]: value }, setErrorsUser, errorsUser);
    validatePass({ ...userData, [property]: value }, setErrorsPass, errorsPass);
  };


  const navigate = useNavigate();
  const [access, setAccess] = useState(true);
  let usernamee = 'voeffray.jonathan@gmail.com';
  let passwordd = 'hola123';

  
  const login = (userData) => {
    if (userData.username === usernamee && userData.password === passwordd) {
      setAccess(true);
      navigate('/home');
    }
  };
  
  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  

  return (
    <div className={styles.containerForm}>
      <form onClick={handleSubmit} className={styles.form}>
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
            errorsUser.username && userData.username
              ? styles.userInvalid
              : styles.userNone
          }
        >
          Username incorrecto
        </span>
        <span
          className={
            !errorsUser.username && userData.username
              ? styles.userSuccess
              : styles.userNone
          }
        >
          Username correcto
        </span>

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
            errorsPass.password && userData.password
              ? styles.userInvalid
              : styles.userNone
          }
        >
          Password incorrecto
        </span>
        <span
          className={
            !errorsPass.password && userData.password
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
