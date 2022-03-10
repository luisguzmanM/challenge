import React from 'react';
import { ReactComponent as Notification } from '../icons/notification_24px.svg';
import { ReactComponent as Chat } from '../icons/chat_24px.svg';
import { ReactComponent as MenuPoints } from '../icons/more_vertical_24px.svg';
import { ReactComponent as CreateIcon } from '../icons/created_24px.svg';
import { ReactComponent as TransOnlineIcon } from '../icons/transferencia_outline_24px.svg';
import FreeCrown from '../icons/free_crown.png';
import Container from '../elements/Container';
import Button from '../elements/Button';

const Header = () => {

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

        <Button>
          
        </Button>

        <Button minifab>
          <CreateIcon className='icon-sidebar' />
        </Button>

        <Button minifab>
          <TransOnlineIcon className='icon-sidebar' />
        </Button>

      </Container>
    </Container>
  );
}

export default Header;