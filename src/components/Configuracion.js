import React from 'react';
import Container from '../elements/Container';
import { ReactComponent as ConfigIcon } from '../icons/Modulos/modulo-configuration.svg';

const Configuracion = ({title}) => {
  return (
    <Container>
      <Container small>
        <ConfigIcon className='icon-sidebar' title={title}/>
      </Container>
      <Container large>
        <p>{title}</p>
      </Container>
      <Container small>
        
      </Container>
    </Container>
  );
}

export default Configuracion;