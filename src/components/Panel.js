import React from 'react';
import styled from 'styled-components';
import Student from '../icons/student.jpg';
import Photo from '../elements/Photo';
import {ReactComponent as MoreTableIcon} from '../icons/asignar_outline_24px.svg';
import Button from '../elements/Button';
import {ReactComponent as TransfIcon} from '../icons/transferencia_outline_24px.svg';
import {ReactComponent as TrashIcon} from '../icons/trash_16px.svg';

const Panel = ({ sidebar }) => {
  return (
    <Div sidebar={sidebar}>
      <ContLeft>
        <Profile>
          <Photo src={Student} alt='Student'/>
          <DataStudent>
            <p>Elio</p>
            <p>Gonzales Perez</p>
          </DataStudent> 
        </Profile>

        <p>Detalles del Estudiante</p>
        
        <Data>
          <Item>
            <p>Nro. Documento</p>
            <p>24234234</p>
          </Item>
          <Item>
            <p>Sede</p>
            <p>PREMIUM COLLEGE-SURCO</p>
          </Item>
          <Item>
            <p>Grado</p>
            <p>1° Primaria</p>
          </Item>
          <Item>
            <p>Estado de pago</p>
            <span>Al día</span>
          </Item>
        </Data>

        <p>Matricular</p>

        <Matricula>
          <Button minifab>
            <MoreTableIcon className='icon-sidebar'/>
          </Button>
          <p>Matricular en aula</p>
        </Matricula>
        
        <College>
          <Text>
            <p>LOS LEÑADORES</p>
            <p>Año Lectivo</p>
          </Text>
          <Icons>
            <TransfIcon className='icon-sidebar'/>
            <TrashIcon className='icon-sidebar'/>
          </Icons>
        </College>

        <span>Histórico de aulas</span>

        <Brothers>
          <p>Hermanos(as)</p>
          <Photo src={Student} alt='Student'/><Photo src={Student} alt='Student'/>
        </Brothers>

        <Parents>
          <p>Familiares</p>
          <Photo src={Student} alt='Student'/><Photo src={Student} alt='Student'/>
        </Parents>

      </ContLeft>
      <ContRight>
        
      </ContRight>
    </Div>
  );
}

const Div = styled.div`
  width: ${({ sidebar }) => (sidebar ? '65%' : '70%')}; 
  height: 520px;
  border-radius: 5px;
  box-shadow: 0 0 10px 2px rgba(0,0,0,0.15);
  position: absolute;
  top: 60px;
  right: 70px;
  z-index: 30;
  background-color: white;
  transition: 0.5s;
  display: flex;
  line-height: 25px;
`;

const ContLeft = styled.div`
  min-width: 270px;
  height: 100%;
  border-right: 2px solid #ddd;
  padding: 10px 15px;
  &>p{
    font-weight: bold;
    margin-top: 15px;
  }
  &>span{
    border: 1px solid #FFD600;
    border-radius: 25px;
    padding: 7px 12px;
    color: #FFD600;
    font-weight: bold;
  }
`;

const ContRight = styled.div`
  width: 70%;
  height: 100%;
  padding: 10px 15px;
`;

const Profile = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
`;

const DataStudent = styled.div`
  margin-left: 10px;
`;

const Data = styled.div`
  width: 100%;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  span {
    width: 70px;
    border: 1px solid #55A69C;
    color: #55A69C;
    padding: 1px 3px;
    border-radius: 25px;
    text-align: center;
  }
`;

const Matricula = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  p{
    margin-left: 15px;
  }
`;

const College = styled.div`
  width: 100%;
  display: flex;
  margin: 5px 0;
`;

const Text = styled.div`
  width: 70%;
`;

const Icons = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: space-around;
`;

const Brothers = styled.div`
  width: 100%;
  margin-top: 0px;
  p{
    margin: 5px 0;
  }
`;

const Parents = styled.div`
  width: 100%;
  margin-top: 0px;
  p{
    margin: 5px 0;
  }
`;

export default Panel;