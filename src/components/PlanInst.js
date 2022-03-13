import React from 'react';
import Container from '../elements/Container';
import { ReactComponent as DownArrowIcon } from '../icons/down_24px.svg';
import { ReactComponent as PlanifIcon } from '../icons/Modulos/modulo-planif-institu.svg';

const PlanInst = ({ title, active, setActive }) => {

  return (
    <>
      <Container>
        <Container small>
          <PlanifIcon className='icon-sidebar' title={title} />
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

export default PlanInst;