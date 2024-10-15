import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './empresaid.css';

const EmpresaId = () => {
  const [id, setId] = useState('');
  const [empresas, setEmpresas] = useState([]); // Cambiado de 'empresa' a 'empresas' para manejar un array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleConsultar = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`http://localhost:8067/operaciongetempresaid/${id}`);
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }

      const data = await response.json();
      console.log('Datos obtenidos:', data);

      // Si los datos son un array, actualizamos el estado con los elementos
      if (Array.isArray(data) && data.length > 0) {
        setEmpresas(data); // Guardamos el array completo en el estado
      } else {
        setEmpresas([]); // Si no hay datos, establecemos el estado como un array vacío
      }
    } catch (error) {
      console.error('Error al cargar datos:', error);
      setError('No se pudo cargar la empresa.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegresar = () => {
    navigate('/');
  };

  return (
    <div className='empresaid-container'>
      <h2 className='title'>Consultar Empresa por Id</h2>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Ingresa el ID de la empresa'
          value={id}
          onChange={(e) => setId(e.target.value)}
          className='input'
        />
        <button onClick={handleConsultar} className='search-button'>
          Consultar
        </button>
      </div>
      {loading && <p className='loading-text'>Cargando datos...</p>}
      {error && <p className='error-text'>{error}</p>}
      
      {empresas.length > 0 ? (
        <div className='empresa-details'>
          <h3>Detalles de las Empresas</h3>
          {empresas.map((empresa, index) => (
            <div key={index} className='empresa-card'>
              <p>
                <strong>ID Parqueadero:</strong> {empresa.idparqueadero}
              </p>
              <p>
                <strong>Nombre Parqueadero:</strong> {empresa.nombreparqueadero}
              </p>
              <p>
                <strong>ID Empleado:</strong> {empresa.idempleado}
              </p>
              <p>
                <strong>Nombre Empleado:</strong> {empresa.nombreempleado}
              </p>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p className='no-data-text'>No se encontró la empresa</p>
      )}
      
      <button onClick={handleRegresar} className='back-button'>
        Regresar al Main
      </button>
    </div>
  );
};

export default EmpresaId;

