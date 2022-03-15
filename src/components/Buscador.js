import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SortMenu } from '../icons/sort_24px.svg';
import { ReactComponent as LeftIcon } from '../icons/left_24px.svg';
import { ReactComponent as CreatedIcon } from '../icons/created_24px.svg';

const Buscador = () => {
  return (
    <Container>

      <Wrapper>
        <InputText type='text' placeholder='Buscar Estudiante' />
        <SortMenu className='icon-sidebar'/>
        <LeftIcon className='icon-sidebar'/>
      </Wrapper>

      <p>Filtro: Familiares</p>
      <span>Busca a tus estudiantes</span>

      <Wrapper>
        <InputSelect>
          <option value="2022">Año electivo 2022</option>
          <option value="2021">Año electivo 2021</option>
          <option value="2020">Año electivo 2020</option>
          <option value="2019">Año electivo 2019</option>
          <option value="2018">Año electivo 2018</option>
        </InputSelect>
        <CreatedIcon className='icon-sidebar'/>
        <SortMenu className='icon-sidebar'/>
      </Wrapper>

      <InputOptions>
        <select>
          <option>3añ. Inicial</option>
          <option value="los-leñadores">Los Leñadores</option>
          <option value="los-leñadores">Los Pastores</option>
        </select>
      </InputOptions>

      <InputOptions>
        <select>
          <option>4añ. Inicial</option>
          <option value="los-leñadores">Los Leñadores</option>
          <option value="los-leñadores">Los Pastores</option>
        </select>
      </InputOptions>

      <InputOptions>
        <select>
          <option>5añ. Inicial</option>
          <option value="los-leñadores">Los Leñadores</option>
          <option value="los-leñadores">Los Pastores</option>
        </select>
      </InputOptions>

      <InputOptions>
        <select>
          <option>1° Primaria</option>
          <option value="los-leñadores">Los Leñadores</option>
          <option value="los-leñadores">Los Pastores</option>
        </select>
      </InputOptions>

      <InputOptions>
        <select>
          <option>2° Primaria</option>
          <option value="los-leñadores">Los Leñadores</option>
          <option value="los-leñadores">Los Pastores</option>
        </select>
      </InputOptions>

      <InputOptions>
        <select>
          <option>3° Primaria</option>
          <option value="los-leñadores">Los Leñadores</option>
          <option value="los-leñadores">Los Pastores</option>
        </select>
      </InputOptions>

      <InputOptions>
        <div>
          <select>
            <option>4° Primaria</option>
            <option value="los-leñadores">Los Leñadores</option>
            <option value="los-leñadores">Los Pastores</option>
          </select>
        </div>
      </InputOptions>

    </Container>
  );
}

const Container = styled.div`
  width: 280px;
  position: relative;
  top: 0px;
  left: 0px;
  padding: 20px;
  &>p {
    
  }
  &>span {
    padding: 0;
    display: block;
    text-align: center;
    margin: 15px auto;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

const InputText = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #DDD;
  outline: none;
  padding: 5px 0px 5px 0px;
  width: 220px;
`;

const InputSelect = styled.select`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 5px 0px 5px 0px;
  width: 180px;
`;

const InputOptions = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 10px;
  margin: auto;
  margin: 20px 0;
  padding: 0 20px 0 20px;
  select {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: transparent;
  }
`;

export default Buscador;