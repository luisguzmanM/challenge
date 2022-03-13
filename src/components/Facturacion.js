import React from 'react';
import Container from '../elements/Container';
import { ReactComponent as FacturacionIcon } from '../icons/Modulos/modulo-suscription.svg';

const Facturacion = ({title}) => {
  return (
    <Container>
      <Container small>
        <FacturacionIcon className='icon-sidebar' title={title}/>
      </Container>
      <Container large>
        <p>{title}</p>
      </Container>
      <Container small>
        
      </Container>
    </Container>
  );
}

export default Facturacion;