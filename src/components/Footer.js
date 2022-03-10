import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <div>
        <p>Leyenda:</p>
        <p>Al día</p>
        <p>Con deuda</p>
        <p>Datos incompletos</p>
        <p>Datos completos</p>
        <p>Extranjero</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 600px;
  height: 30px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -10;
  background-color: #F4F8F9;
  display: flex;
  justify-content: center;
  div {
    display: flex;
    justify-content:space-between;
    width: 600px;
    position:relative ;
    p:nth-child(2) {
      &::before {
        content: '';
        position: absolute;
        top: 0px;
        left: 70px;
        width: 13px;
        height: 13px;
        background-color: #43ACA1;
        border-radius: 50%;
      }
    }
    p:nth-child(3) {
      &::before {
        content: '';
        position: absolute;
        top: 0px;
        left: 135px;
        width: 13px;
        height: 13px;
        background-color: #FF0000;
        border-radius: 50%;
      }
    }
    p:nth-child(4) {
      &::before {
        content: '';
        position: absolute;
        top: 0px;
        left: 235px;
        width: 13px;
        height: 13px;
        background-color: #9E9E9E;
        border-radius: 50%;
      }
    }
    p:nth-child(5) {
      &::before {
        content: '';
        position: absolute;
        top: 0px;
        left: 382px;
        width: 13px;
        height: 13px;
        background-color: #3F51B5;
        border-radius: 50%;
      }
    }
  }
`;

export default Footer;