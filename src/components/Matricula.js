import React from 'react';
import Container from '../elements/Container';
import { ReactComponent as MatriculaIcon } from '../icons/Modulos/modulo-matricula.svg';
import { ReactComponent as DownArrowIcon } from '../icons/down_24px.svg';

const Matricula = ({ title, active, setActive }) => {
  return (
    <>
      <Container>
        <Container small>
          <MatriculaIcon className='icon-sidebar' title={title} />
        </Container>
        <Container large>
          <p>{title}</p>
        </Container>
        <Container small>
          <DownArrowIcon className='icon-sidebar' onClick={() => setActive(title)} />
        </Container>
      </Container>
      <Container moreOpt className={(active === title ? "show" : "hidden")}>
        <Container small></Container>
        <Container large>
          <p>Option 1</p>
        </Container>
      </Container>
      <Container moreOpt className={(active === title ? "show" : "hidden")}>
        <Container small></Container>
        <Container large>
          <p>Option 2</p>
        </Container>
      </Container>
    </>
  );
}

export default Matricula;