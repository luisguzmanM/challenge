import React from 'react';
import Container from '../elements/Container';
import {ReactComponent as AgendaIcon} from '../icons/Modulos/modulo-agenda.svg';

const Agenda = ({title}) => {
  return (
    <Container>
      <Container small>
        <AgendaIcon className='icon-sidebar' title={title}/>
      </Container>
      <Container large>
        <p>{title}</p>
      </Container>
      <Container small>
        
      </Container>
    </Container>
  );
}

export default Agenda;