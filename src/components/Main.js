import React from 'react';
import Buscador from './Buscador';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Main = () => {
  return (
    <Container>
      <Buscador />
      <Footer/>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0px;
  background-color: #F4F8F9;
  z-index: -10;
`;

export default Main;