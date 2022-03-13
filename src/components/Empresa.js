import React from 'react';
import styled from 'styled-components';
import Container from '../elements/Container';
import Logo from '../icons/Logos/smiledu--logo-text.png';
import IconGold from '../icons/Logos/gold.png';
import { ReactComponent as MenuIcon } from '../icons/menu_24px.svg';

const Empresa = ({sidebar, setSidebar}) => {

  const showSidebar = () => {
    setSidebar(!sidebar);
    if (sidebar === true) {
      document.body.style.transition = '0.5s';
      document.body.style.marginLeft = '60px';
    } else {
      document.body.style.transition = '0.5s';
      document.body.style.marginLeft = '300px';
    }
  }

  return (
    <Container main>
      <Container small>
        <MenuIcon className='icon-sidebar' title='Menu' onClick={showSidebar} />
      </Container>
      <Container large>
        <p>
          <LogoSmiledu src={Logo} alt="logo smiledu" />
          <IconPremium src={IconGold} alt="Premium" />
        </p>
      </Container>
      <Container small>

      </Container>
    </Container>
  );
}

const LogoSmiledu = styled.img`
  width: 90px;
`;

const IconPremium = styled.img`
  width: 18px;
  position: absolute;
  top: 20px;
  left: 145px;
`;

export default Empresa;