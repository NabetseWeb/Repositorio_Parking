import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './empresanombre.css';

const EmpresaNombre = () => {
  const [empresas, setEmpresas] = useState(null);
  const [nombreParqueadero, setNombreParqueadero] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleConsultar = () => {
    if (!nombreParqueadero) return;

    setLoading(true);
    setError('');
    fetch(`http://localhost:8067/operaciongetempresa/nombre/${nombreParqueadero}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta de la red');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Datos obtenidos:', data);
        setEmpresas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar datos:', error);
        setError('No se pudieron cargar los datos. Intenta de nuevo.');
        setLoading(false);
      });
  };

  const handleRegresar = () => {
    navigate('/');
  };

  if (loading) return <p className='loading-text'>Cargando datos...</p>;

  return (
    <div className='empresa-nombre-container'>
      <h2 className='title'>Consultar Empresas por Nombre de Parqueadero</h2>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Ingresa el nombre del parqueadero'
          value={nombreParqueadero}
          onChange={(e) => setNombreParqueadero(e.target.value)}
          className='input'
        />
        <button onClick={handleConsultar} className='search-button'>
          Consultar
        </button>
      </div>
      {error && <p className='error-text'>{error}</p>}
      {empresas ? (
        <div className='empresas-details'>
          <h3>Detalles de las Empresas</h3>
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
                  <td>{empresa.idparqueadero}</td> {/* Cambiado de `IdParqueadero` a `idparqueadero` */}
                  <td>{empresa.nombreparqueadero}</td> {/* Cambiado de `NombreParqueadero` a `nombreparqueadero` */}
                  <td>{empresa.idempleado}</td> {/* Cambiado de `IdEmpleado` a `idempleado` */}
                  <td>{empresa.nombreempleado}</td> {/* Cambiado de `NombreEmpleado` a `nombreempleado` */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className='no-data-text'>No se encontraron empresas</p>
      )}
      <button onClick={handleRegresar} className='back-button'>
        Regresar al Main
      </button>
    </div>
  );
};

export default EmpresaNombre;
