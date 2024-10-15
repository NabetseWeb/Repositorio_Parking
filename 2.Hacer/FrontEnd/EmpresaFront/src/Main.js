import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

const Main = () => {
  return (
    <div className='main-container'>
      <h1 className='main-title'>Realizar Consultas</h1>
      <div className='button-container'>
        <Link to='/empresas' className='main-button'>
          Consultar todas las empresas
        </Link>
        <Link to='/empresaid' className='main-button'>
          Consultar Empresa por Id
        </Link>
        <Link to='/empresanombre' className='main-button'>
          Consultar Empresa por nombre de parqueadero
        </Link>
      </div>
    </div>
  );
};


export default Main;