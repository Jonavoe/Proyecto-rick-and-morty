import React from 'react';
import Banner from '../../components/Banner/Banner';
import Form from '../../components/Form/Form';

const Home = props => {
  return (
    <div>
      <Banner />
      <Form login={props.login}/>
    </div>
  );
};

export default Home;
