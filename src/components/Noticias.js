import React from 'react';
import Container from '../elements/Container';
import { ReactComponent as NoticiasIcon } from '../icons/Modulos/modulo-noticias.svg';

const Noticias = ({title}) => {
  return (
    <Container>
      <Container small>
        <NoticiasIcon className='icon-sidebar' title={title}/>
      </Container>
      <Container large>
        <p>{title}</p>
      </Container>
      <Container small>
        
      </Container>
    </Container>
  );
}

export default Noticias;

