import React from 'react';
import Banner from '../../components/Banner/Banner';
import Form from '../../components/Form/Form';

const Home = ({login}) => {
  return (
    <div>
      <Banner />
      <Form login={login}/>
    </div>
  );
};

export default Home;
