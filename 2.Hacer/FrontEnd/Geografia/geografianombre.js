// src/GeografiaNombre.js
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const GeografiaNombre = () => {
  const [geografia, setGeografia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8067/operaciongetgeografia/nombre/Medellin')  // change the URL to match the API
      .then((response) => response.json())
      .then((data) => {
        setGeografia(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar datos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando datos...</p>;

  return (
    <div>
      <h2>Geografía por Nombre de Ciudad</h2>
      <table>
        <thead>
          <tr>
            <th>ID País</th>
            <th>Nombre País</th>
            <th>ID Departamento</th>
            <th>Nombre Departamento</th>
            <th>ID Ciudad</th>
            <th>Nombre Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {geografia.map((geo) => (
            <tr key={geo._id}>
              <td>{geo.IdPais}</td>
              <td>{geo.NombrePais}</td>
              <td>{geo.IdDepartamento}</td>
              <td>{geo.NombreDepartamento}</td>
              <td>{geo.IdCiudad}</td>
              <td>{geo.nombreciudad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GeografiaNombre;
