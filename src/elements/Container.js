import styled, { css } from 'styled-components';

const Container = styled.div`

  background-color: #FFD600;
  width: 100%;
  height: 100px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 20;
  p {
    color: white;
    text-transform: capitalize;
    font-size: 20px;
  } 

  ${props => props.cont1 && css`
    width: 60px;
    min-width: 60px;
    height: 40px;
    max-height: 40px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    p {
      color: rgba(0,0,0,0.8)
      font-size: 14px;
    }
  `}

  ${props => props.cont2 && css`
    width: 180px;
    min-width: 180px;
    height: 40px;
    min-height: 40px;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    background-color: transparent;
    p {
      color: rgba(0,0,0,0.6);
      font-size: 14px;
    }
  `}

  ${props => props.cont3 && css`
    width: 60px;
    min-width: 60px;
    height: 40px;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 0;
    p {
      color: rgba(0,0,0,0.6);
      font-size: 14px;
    }
  `}

  ${props => props.main && css`
    background-color: #F4F8F9;
    width: 100%;
    min-width: 100%;
    height: 100%;
    min-height: 100%;
    position: absolute;
    top: 100px;
    overflow: hidden;
    z-index: 10;
    p{
      color: rgba(0,0,0,0.6);
      font-size: 14px;
    }
  `}

  ${props => props.contopt && css`
    width: 200px;
    min-width: 200px;
    display: flex;
    justify-content: space-between;
    margin-right: 30px;
    position: absolute;
    top: 0;
    right: 0;
  `}

  ${props => props.contbusc && css`
    width:250px;
    min-width: 250px;
    height: 100%;
    min-height: 100%;
    padding: 15px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    span{
      text-align: center;
      margin: 20px 0px;
    }
    p{
      color: rgba(0,0,0,0.6);
      font-size: 14px;
    }
  `}

  ${props => props.fabs && css`
    background-color: transparent;
    width: 40px;
    height: 150px;
    position: absolute;
    top: 80px;
    right: 15px;
    display: flex;
    flex-direction: column;
    padding: 0;
    transition: 0.5s;
  `}
`;

export default Container;