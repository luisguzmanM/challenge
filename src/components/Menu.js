import React from 'react';
import styled from 'styled-components';
import Logo from '../icons/Logos/smiledu--logo-text.png';
import IconGold from '../icons/Logos/gold.png';
import ProfilePhoto from '../icons/photo.jpg';
import { ReactComponent as MenuIcon } from '../icons/menu_24px.svg';
import { ReactComponent as DownArrowIcon } from '../icons/down_24px.svg';
import { ReactComponent as DashboardIcon } from '../icons/Modulos/modulo-dashboard.svg';
import { ReactComponent as NoticiasIcon } from '../icons/Modulos/modulo-noticias.svg';
import { ReactComponent as AgendaIcon } from '../icons/Modulos/modulo-agenda.svg';
import { ReactComponent as PlanifIcon } from '../icons/Modulos/modulo-planif-institu.svg';
import { ReactComponent as TalentoHumanoIcon } from '../icons/Modulos/modulo-talentohumano.svg';
import { ReactComponent as TesoreriaIcon } from '../icons/Modulos/modulo-tesoreria.svg';
import { ReactComponent as GestionAcadIcon } from '../icons/Modulos/modulo-gestion-academ.svg';
import { ReactComponent as MatriculaIcon } from '../icons/Modulos/modulo-matricula.svg';
import { ReactComponent as ProgramCurrIcon } from '../icons/Modulos/modulo-program-curricu.svg';
import { ReactComponent as ConfigIcon } from '../icons/Modulos/modulo-configuration.svg';
import { ReactComponent as FacturacionIcon } from '../icons/Modulos/modulo-suscription.svg';
import Photo from '../elements/Photo';
import Container from '../elements/Container';

const Menu = ({sidebar, setSidebar}) => {

  const showSidebar = () => {
    setSidebar(!sidebar);
    if(sidebar === true){
      document.body.style.transition = '0.5s';
      document.body.style.marginLeft = '60px';
    } else {
      document.body.style.transition = '0.5s';
      document.body.style.marginLeft = '300px';
    }
  }

  return (
    <Sidebar sidebar={sidebar}>

      <SidebarSection>
        <Wrapper>
          <Container cont1>
            <MenuIcon className='icon-sidebar' Icon title='Menu' onClick={showSidebar}/>
          </Container>
          <Container cont2>
            <p>
              <LogoSmiledu src={Logo} alt="logo smiledu" />
              <IconPremium src={IconGold} alt="Premium" />
            </p>
          </Container>
        </Wrapper>
      </SidebarSection>

      <SidebarSection>
        <Wrapper>
          <Container cont1>
            <Photo src={ProfilePhoto} alt="photo" title='Perfil' />
          </Container>
          <Container cont2>
            <p>John Smith</p>
            <p>Promotor</p>
          </Container>
          <Container cont3>
            <DownArrowIcon className='icon-sidebar' />
          </Container>
        </Wrapper>
      </SidebarSection>

      <SidebarMenuSection>
        <Wrapper>
          <Container cont1>
            <DashboardIcon className='icon-sidebar' title='Dashboard' />
          </Container>
          <Container cont2>
            <p>Dashboard</p>
          </Container>
        </Wrapper>

        <Wrapper>
          <Container cont1>
            <NoticiasIcon className='icon-sidebar' title='Noticias' />
          </Container>
          <Container cont2>
            <p>Noticias</p>
          </Container>
        </Wrapper>

        <Wrapper>
          <Container cont1>
            <AgendaIcon className='icon-sidebar' title='Agenda' />
          </Container>
          <Container cont2>
            <p>Agenda</p>
          </Container>
        </Wrapper>
      </SidebarMenuSection>

      <SidebarMenuSection>
        <Wrapper>
          <Container cont1>
            <PlanifIcon className='icon-sidebar' title='Planificación Institucional' />
          </Container>
          <Container cont2>
            <p>Planificación Institucional</p>
          </Container>
          <Container cont3>
            <DownArrowIcon className='icon-sidebar' />
          </Container>
        </Wrapper>

        <Wrapper>
          <Container cont1>
            <TalentoHumanoIcon className='icon-sidebar' title='Talento Humano' />
          </Container>
          <Container cont2>
            <p>Talento Humano</p>
          </Container>
          <Container cont3>
            <DownArrowIcon className='icon-sidebar' />
          </Container>
        </Wrapper>

        <Wrapper>
          <Container cont1>
            <TesoreriaIcon className='icon-sidebar' title='Tesorería' />
          </Container>
          <Container cont2>
            <p>Tesorería</p>
          </Container>
          <Container cont3>
            <DownArrowIcon className='icon-sidebar' />
          </Container>
        </Wrapper>

        <Wrapper>
          <Container cont1>
            <GestionAcadIcon className='icon-sidebar' title='Gestión Académica' />
          </Container>
          <Container cont2>
            <p>Gestión Académica</p>
          </Container>
          <Container cont3>
            <DownArrowIcon className='icon-sidebar' />
          </Container>
        </Wrapper>

        <Wrapper>
          <Container cont1>
            <MatriculaIcon className='icon-sidebar' title='Matricula' />
          </Container >
          <Container cont2>
            <p>Matricula</p>
          </Container>
          <Container cont3>
            <DownArrowIcon className='icon-sidebar' />
          </Container>
        </Wrapper>

        <Wrapper>
          <Container cont1>
            <ProgramCurrIcon className='icon-sidebar' title='Programación Curricular' />
          </Container>
          <Container cont2>
            <p>Programación Curricular</p>
          </Container>
          <Container cont3>
            <DownArrowIcon className='icon-sidebar' />
          </Container>
        </Wrapper>

        <Wrapper>
          <Container cont1>
            <ConfigIcon className='icon-sidebar' title='Configuración' />
          </Container>
          <Container cont2>
            <p>Configuración</p>
          </Container>
          <Container cont3>
            <DownArrowIcon className='icon-sidebar' />
          </Container>
        </Wrapper>
      </SidebarMenuSection>

      <SidebarMenuSection>
        <Wrapper>
          <Container cont1>
            <FacturacionIcon className='icon-sidebar' title='Facturación'/>
          </Container>
          <Container cont2>
            <p>Facturación</p>
          </Container>
          <Container cont3>
            <DownArrowIcon className='icon-sidebar'/>
          </Container>
        </Wrapper>
      </SidebarMenuSection>

      <SidebarMenuSection>
        <Wrapper>
          <Container cont1>
            <IconPremiumMenu src={IconGold} alt="Premium" className='icon-sidebar'/>
          </Container>
          <Container cont2>
            <p>2022 Smiledu - Premium</p>
          </Container>
        </Wrapper>

        <Wrapper>
          <Container cont1>

          </Container>
          <Container cont2>
            <GoldText>PREMIUM</GoldText>
            <p>Privacidad - Contidiciones</p>
          </Container>
          <Container cont3>
            <p>26/0</p>
          </Container>
        </Wrapper>
      </SidebarMenuSection>

    </Sidebar>
  );
}

const Sidebar = styled.nav`
  width: ${({ sidebar }) => (sidebar ? '300px' : '60px')};
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid rgba(0,0,0,0.1);
  overflow: hidden;
  transition: 0.5s;
  z-index: 40;
`;

const SidebarSection = styled.section`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
`;

const LogoSmiledu = styled.img`
  width: 90px;
`;

const IconPremium = styled.img`
  width: 18px;
  position: absolute;
  top: 13px;
  left: 83px;
`;

const IconPremiumMenu = styled.img`
  width: 18px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  a {
    margin-left: 40px;
    position: relative;
    z-index: 10;
  }
  div {
    text-align: left;
  }
`;

const SidebarMenuSection = styled.section`
  width: 100%;
  min-height: 40px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
`;

const GoldText = styled.p`
  color: #FFD600;
`;

export default Menu;