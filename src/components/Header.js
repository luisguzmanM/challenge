import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import Button from '../elements/Button';
import { ReactComponent as Notification } from '../icons/notification_24px.svg';
import { ReactComponent as Chat } from '../icons/chat_24px.svg';
import { ReactComponent as MenuPoints } from '../icons/more_vertical_24px.svg';
import { ReactComponent as CreateIcon } from '../icons/created_24px.svg';
import { ReactComponent as TransOnlineIcon } from '../icons/transferencia_outline_24px.svg';
import FreeCrown from '../icons/free_crown.png';

const Header = () => {

  const [ dropdown, setDropdown ] = useState(false);
  const showDropdown = () => {
    setDropdown(!dropdown);
  }
 
  return (
    <Container>
      <p>matricula | estudiantes</p>
      <Container contopt>
        <Notification className='icon-sidebar' />
        <Chat className='icon-sidebar' />
        <MenuPoints className='icon-sidebar' />
        <img src={FreeCrown} className="icon-sidebar" alt='Free Plan'/>
      </Container>
      <Container fabs>
        <Button onClick={showDropdown} className='button-fabs'>+</Button>
        {(dropdown) ?
          <Wrapper>
            <Button minifab className='mini-fab1'>
              <CreateIcon className='icon-sidebar' />
            </Button>
            <Button minifab className='mini-fab2'>
              <TransOnlineIcon className='icon-sidebar' />
            </Button>
          </Wrapper>
          :
          null
        }
      </Container>
    </Container>
  );
}

const Container = styled.div`
  background-color: #FFD600;
  width: 100%;
  height: 100px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  p {
    color: white;
    text-transform: capitalize;
    font-size: 20px;
  } 
  ${props => props.contopt && css`
    width: 180px;
    min-width: 180px;
    display: flex;
    justify-content: space-between;
    margin-right: 30px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -10;
    &::before {
      content: '';
      position: absolute;
      top: 20px;
      left: 70px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: red;
    }
  `}
  ${props => props.fabs && css`
    background-color: transparent;
    width: 40px;
    height: 150px;
    position: absolute;
    top: 80px;
    right: 15px;
    display: flex;
    flex-direction: column;
    padding: 0;
    transition: 0.5s;
  `}
`;

const Wrapper = styled.div`
  width: 40px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export default Header;