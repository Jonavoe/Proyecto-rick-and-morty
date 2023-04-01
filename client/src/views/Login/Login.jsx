import React from 'react';
import Form from '../../components/Form/Form';

const Home = ({login}) => {
  return (
    <div>
      <Form login={login}/>
    </div>
  );
};

export default Home;
