import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import { ReactComponent as Notification } from '../icons/notification_24px.svg';
import { ReactComponent as Chat } from '../icons/chat_24px.svg';
import { ReactComponent as MenuPoints } from '../icons/more_vertical_24px.svg';
import { ReactComponent as CreateIcon } from '../icons/created_24px.svg';
import { ReactComponent as TransOnlineIcon } from '../icons/transferencia_outline_24px.svg';
import FreeCrown from '../icons/free_crown.png';
import Button from '../elements/Button';

const Header = () => {
  const [ dropdown, setDropdown ] = useState(false);
  const showDropdown = () => {
    setDropdown(!dropdown);
  }
  return (
    <Container className='header'>
      <p>matricula | estudiantes</p>
      <Container contopt>
        <Notification className='icon-sidebar' />
        <Chat className='icon-sidebar' />
        <MenuPoints className='icon-sidebar' />
        <img src={FreeCrown} className="icon-sidebar" alt='Free Plan'/>
      </Container>
      <Container fabs>
        <Button onClick={showDropdown}></Button>
        {(dropdown) ? 
          <Wrapper>
            <Button minifab>
              <CreateIcon className='icon-sidebar' />
            </Button>
            <Button minifab>
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
  z-index: 20;
  p {
    color: white;
    text-transform: capitalize;
    font-size: 20px;
  } 
  ${props => props.contopt && css`
    width: 200px;
    min-width: 200px;
    display: flex;
    justify-content: space-between;
    margin-right: 30px;
    position: absolute;
    top: 0;
    right: 0;
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export default Header;