import React from 'react';
import Container from '../elements/Container';
import { ReactComponent as ProgramCurrIcon } from '../icons/Modulos/modulo-program-curricu.svg';
import { ReactComponent as DownArrowIcon } from '../icons/down_24px.svg';

const ProgCurri = ({ title, active, setActive }) => {
  return (
    <>
      <Container>
        <Container small>
          <ProgramCurrIcon className='icon-sidebar' title={title} />
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

export default ProgCurri;