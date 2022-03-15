import styled, {css}  from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease;
  ${props => props.main && css`
    height: 50px;
  `}
  ${props => props.small && css`
    width: 60px;
    min-width: 60px;
    justify-content: center;
  `}
  ${props => props.large && css`
    width: 180px;
    min-width: 180px;
    justify-content: flex-start;
    div {
      flex-direction: column;
    }
    span {
      font-style: italic;
    }
  `}
  ${props => props.moreOpt && css`
    width: 100%;
    height: 0;
    justify-content: flex-start;
    background-color: #EBEBEB;
  `}
`;

export default Container;