import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #2196F3;
  max-width: 38px;
  min-width: 38px;
  max-height: 38px;
  min-height: 38px;
  border-radius: 50%;
  border: none;
  outline: none;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  ${props => props.minifab && css`
    background-color: #FFF;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
    position: relative;
    margin: 7.5px 0;
  `}

  ${props => props.minifabLeft && css`
    background-color: #FFF;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
    position: relative;
  `}
`;

export default Button;