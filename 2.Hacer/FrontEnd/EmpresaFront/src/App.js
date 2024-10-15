import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './Main';
import Empresas from './empresa';
import EmpresaId from './empresaid';
import EmpresaNombre from './empresanombre';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} /> 
        <Route path='/empresas' element={<Empresas />} />
        <Route path='/empresaid' element={<EmpresaId />} />
        <Route path='/empresanombre' element={<EmpresaNombre />} />
      </Routes>
    </Router>
  );
};

export default App;