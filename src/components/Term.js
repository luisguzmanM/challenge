import React from 'react';
import styled, {css} from 'styled-components';

const Term = ({plan, term}) => {
  return (
    <Container>
      <Container small>
        
      </Container>
      <Container large>
        <GoldText>{plan}</GoldText>
        <p>{term}</p>
      </Container>
      <Container small>
      <p>0/26</p>
      </Container>
    </Container>
  );
}

const GoldText = styled.p`
  color: #FFD600;
  text-transform: uppercase;
  font-style: italic;
`;

const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${props => props.small && css`
    width: 60px;
    min-width: 60px;
    justify-content: center;
  `}
  ${props => props.large && css`
    width: 180px;
    min-width: 180px;
    justify-content: flex-start;
    flex-direction: column;
  `}
`;

export default Term;