import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './empresa.css'; 

const Empresas = () => {
  const [empresas, setEmpresas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8067/operaciongetempresa')
      .then((response) => response.json())
      .then((data) => {
        console.log('Datos recibidos:', data);
        setEmpresas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar datos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className='loading-text'>Cargando datos...</p>;

  const handleRegresar = () => {
    navigate('/');
  };

  return (
    <div className='empresas-container'>
      <h2 className='title'>Empresas</h2>
      <table className='empresas-table'>
        <thead>
          <tr>
            <th>ID Parqueadero</th>
            <th>Nombre Parqueadero</th>
            <th>ID Empleado</th>
            <th>Nombre Empleado</th>
          </tr>
        </thead>
        <tbody>
          {empresas.map((empresa) => (
            <tr key={empresa._id}>
              <td>{empresa.idparqueadero}</td>
              <td>{empresa.nombreparqueadero}</td>
              <td>{empresa.idempleado}</td>
              <td>{empresa.nombreempleado}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleRegresar} className='back-button'>
        Regresar al Main
      </button>
    </div>
  );
};

export default Empresas;





