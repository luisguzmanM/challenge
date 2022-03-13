import React from 'react';
import Container from '../elements/Container';
import { ReactComponent as DashboardIcon } from '../icons/Modulos/modulo-dashboard.svg';

const Dashboard = ({title}) => {
  return (
    <Container>
      <Container small>
        <DashboardIcon className='icon-sidebar' title={title}/>
      </Container>
      <Container large>
        <p>{title}</p>
      </Container>
      <Container small>
        
      </Container>
    </Container>
  );
}

export default Dashboard;