import React from 'react';
import Container from '../elements/Container';
import styled from 'styled-components';
import IconGold from '../icons/Logos/gold.png';

const Plan = ({ copy, plan }) => {
  return (
    <Container>
      <Container small>
        <IconPremiumMenu src={IconGold} alt="Premium" className='icon-sidebar' />
      </Container>
      <Container large>
        <p>{copy} - <span>{plan}</span></p>
      </Container>
      <Container small>
        
      </Container>
    </Container>
  );
}

const IconPremiumMenu = styled.img`
  width: 18px;
`;

export default Plan;