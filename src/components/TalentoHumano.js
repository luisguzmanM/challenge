import React from 'react';
import Container from '../elements/Container';
import { ReactComponent as TalentoHumanoIcon } from '../icons/Modulos/modulo-talentohumano.svg';
import { ReactComponent as DownArrowIcon } from '../icons/down_24px.svg';

const TalentoHumano = ({title, active, setActive}) => {
  return (
    <>
      <Container>
        <Container small>
          <TalentoHumanoIcon className='icon-sidebar' title={title}/>
        </Container>
        <Container large>
          <p>{title}</p>
        </Container>
        <Container small>
          <DownArrowIcon className='icon-sidebar' onClick={() => setActive(title)}/>
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

export default TalentoHumano;