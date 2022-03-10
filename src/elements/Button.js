import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #2196F3;
  width: 38px;
  height: 38px;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  outline: none;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    width: 15px;
    height: 1px;
    background-color: white;
    transform: rotate(90deg);
    position: absolute;
  }

  &::after {
    content: '';
    width: 15px;
    height: 1px;
    background-color: white;
    position: absolute;
  }

  ${props => props.minifab && css`
    background-color: #FFF;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
    position: relative;
    &::after {
      content: '';
      width: 0px;
      height: 0px;
      background-color: transparent;
    }
    &::before{
      content: '';
      width: 0px;
      height: 0px;
      background-color: transparent;
    }
  `}

  ${props => props.minifabLeft && css`
    background-color: #FFF;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
    position: relative;
    &::after {
      content: '';
      width: 0px;
      height: 0px;
      background-color: transparent;
    }
    &::before{
      content: '';
      width: 0px;
      height: 0px;
      background-color: transparent;
    }
  `}
`;

export default Button;