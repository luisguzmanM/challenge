import React from 'react';
import Container from '../elements/Container';
import { ReactComponent as GestionAcadIcon } from '../icons/Modulos/modulo-gestion-academ.svg';
import { ReactComponent as DownArrowIcon } from '../icons/down_24px.svg';

const GestionAcad = ({ title, active, setActive }) => {
  return (
    <>
      <Container>
        <Container small>
          <GestionAcadIcon className='icon-sidebar' title={title} />
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

export default GestionAcad;