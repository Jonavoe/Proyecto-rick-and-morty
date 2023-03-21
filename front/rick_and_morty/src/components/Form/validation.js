const validate = (userData, setErrors, errors) => {
  if (!userData.username)
    setErrors(errors => ({ ...errors, username: 'Username vacio' }));
  else if (userData.username.length > 35)
    setErrors(errors => ({
      ...errors,
      username: 'tiene mas de 35 caracteres',
    }));
  else {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/.test(userData.username))
      setErrors(errors => ({ ...errors, username: '' }));
    else setErrors(errors => ({ ...errors, username: 'Username Invalido' }));
  }

  if (/^(?=.*\d)[a-zA-Z\d]{6,10}$/.test(userData.password))
    setErrors(errors => ({ ...errors, password: '' }));
  else setErrors(errors => ({ ...errors, password: 'Password Invalido' }));
};

export default validate;
