import React, {useState} from 'react';
import styled from 'styled-components';
import Empresa from './Empresa';
import PlanInst from './PlanInst';
import Dashboard from './Dashboard';
import Noticias from './Noticias';
import TalentoHumano from './TalentoHumano';
import Tesoreria from './Tesoreria';
import GestionAcad from './GestionAcad';
import Matricula from './Matricula';
import ProgCurri from './ProgCurri';
import Configuracion from './Configuracion';
import Facturacion from './Facturacion';
import Term from './Term';
import Profile from './Profile';
import Plan from './Plan';
import Agenda from './Agenda';

const Menu = ({sidebar, setSidebar}) => {

  const [active, setActive] = useState("");

  return (
    <Sidebar sidebar={sidebar}>

      <SidebarSection>
        <Empresa sidebar={sidebar} setSidebar={setSidebar} />
      </SidebarSection>

      <SidebarSection>
        <Profile name='John Smith' profession='Promotor'/> 
      </SidebarSection>

      <SidebarMenuSection>
        <Dashboard title='Dashboard'/>
        <Noticias title='Noticias'/>
        <Agenda title='Agenda'/> 
      </SidebarMenuSection>

      <SidebarMenuSection>
        <PlanInst title='Planificación Institucional' active={active} setActive={setActive}/>
        <TalentoHumano title='Talento Humano' active={active} setActive={setActive}/>
        <Tesoreria title='Tesorería' active={active} setActive={setActive}/>
        <GestionAcad title='Gestión Académica' active={active} setActive={setActive}/>
        <Matricula title='Matrícula' active={active} setActive={setActive}/>
        <ProgCurri  title='Programación Curricular' active={active} setActive={setActive}/>
        <Configuracion title='Configuración'/>
      </SidebarMenuSection>

      <SidebarMenuSection>
        <Facturacion title='Facturación'/>
      </SidebarMenuSection>

      <Plan copy='2020 Smiledu' plan='Premium'/>
      <Term plan='PREMIUM' term='Privacidad - Condiciones'/>

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
  overflow-x: hidden;
  transition: 0.5s;
  z-index: 40;
  background-color: white;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const SidebarSection = styled.section`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
`;

const SidebarMenuSection = styled.section`
  width: 100%;
  min-height: 40px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
`;

export default Menu;