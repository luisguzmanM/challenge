import React from 'react';
import Buscador from './Buscador';
import Container from '../elements/Container';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <Container main>
      <Buscador />
      <Footer/>
    </Container>
  );
}

export default Main;