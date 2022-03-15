import React from 'react';
import Container from '../elements/Container';
import { ReactComponent as TesoreriaIcon } from '../icons/Modulos/modulo-tesoreria.svg';
import { ReactComponent as DownArrowIcon } from '../icons/down_24px.svg';

const Tesorería = ({ title, active, setActive }) => {
  return (
    <>
      <Container>
        <Container small>
          <TesoreriaIcon className='icon-sidebar' title={title} />
        </Container>
        <Container large>
          <p>{title}</p>
        </Container>
        <Container small>
          {(active === title) ? <DownArrowIcon className='icon-sidebar rotate' onClick={() => setActive(title)} />
          : <DownArrowIcon className='icon-sidebar' onClick={() => setActive(title)} />
          }
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

export default Tesorería;