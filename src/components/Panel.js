import React from 'react';
import styled from 'styled-components';
import Student from '../icons/student.jpg';
import Photo from '../elements/Photo';
import {ReactComponent as MoreTableIcon} from '../icons/asignar_outline_24px.svg';
import {ReactComponent as TransfIcon} from '../icons/transferencia_outline_24px.svg';
import {ReactComponent as TrashIcon} from '../icons/trash_16px.svg';
import Button from '../elements/Button';

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

        <Parents>
          <p>Hermanos(as)</p>
          <div>
            <Photo src={Student} alt='Student'/>
            <Photo src={Student} alt='Student'/>
          </div>
        </Parents>

        <Parents>
          <p>Familiares</p>
          <div>
            <Photo src={Student} alt='Student'/>
            <Photo src={Student} alt='Student'/>
          </div>
        </Parents>

      </ContLeft>
      <ContRight>
        <div>
          <ul>
            <li><a href='#'>Informacion</a></li>
            <li><a href='#'>Ficha Medica</a></li>
            <li><a href='#'>Ficha Psicologica</a></li>
            <li><a href='#'>Compromisos</a></li>
          </ul>
        </div>
        <form>
          <div>
            <select>
              <option selected value=''>Personal</option>
              <option value='option1'>Option 01</option>
              <option value='option2'>Option 02</option>
            </select>
          </div>
          <div>
            <select>
              <option selected value=''>Contacto</option>
              <option value='option1'>Option 01</option>
              <option value='option2'>Option 02</option>
            </select>
          </div>
          <div>
            <select>
              <option selected value=''>Datos de Privacidad</option>
              <option value='option1'>Option 01</option>
              <option value='option2'>Option 02</option>
            </select>
          </div>
          <div>
            <select>
              <option selected value=''>Adicional</option>
              <option value='option1'>Option 01</option>
              <option value='option2'>Option 02</option>
            </select>
          </div>
        </form>
      </ContRight>
    </Div>
  );
}

const Div = styled.div`
  width: ${({ sidebar }) => (sidebar ? '52%' : '68%')}; 
  height: 540px;
  border-radius: 5px;
  box-shadow: 0 0 10px 2px rgba(0,0,0,0.15);
  position: absolute;
  top: -35px;
  left: 280px;
  background-color: white;
  transition: 0.5s;
  line-height: 23px;
  display: flex;
  z-index: 20;
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
    display: flex;
    width: 150px;
    height: 40px;
    margin: 10px 0;
    border: 1px solid #FFD600;
    border-radius: 25px;
    color: #FFD600;
    font-weight: bold;
    justify-content: center;
    align-items: center;
  }
`;

const ContRight = styled.div`
  width: 100%;
  height: 100%;
  div {
    width: 100%;
    height: 60px;
    padding: 0px 0 0 10px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #DDD;
    ul {
      list-style: none;
      display: flex;
      li {
        height: 100%;
        margin-right: 20px;
        a{
          text-decoration: none;
          &:hover {
            color: #FFD600;
          }
        }
      }
    }
  }
  form {
    div {
      width: 100%;
      padding: 20px;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      select {
        border: none;
        outline: none;
        width: 100%;
      }
    }
  }
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
  margin: 10px 0;
`;

const Icons = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: space-around;
`;

const Parents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p{
    margin: 5px 0;
  }
  div {
    width: 70px;
    display: flex;
    justify-content: space-between;
  }
`;

export default Panel;