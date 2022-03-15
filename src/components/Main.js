import React from 'react';
import styled from 'styled-components';
import Buscador from './Buscador';
import Panel from './Panel';

const Main = ({sidebar}) => {

  return (
    <Container>
      <Buscador />
      <Panel sidebar={sidebar}/>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: #F4F8F9;
`;

export default Main;