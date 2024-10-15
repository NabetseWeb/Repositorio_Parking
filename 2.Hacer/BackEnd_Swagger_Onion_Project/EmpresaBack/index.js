
// index.js

const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecificationempresa = require('./swagger/object/empresa/swaggerSpecificationempresa');
const cors = require('cors');
const empresaApi = require('./application/object/empresa/apiempresa');

var app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Permitir solicitudes desde este origen
  }));

app.use(bodyParser.json());

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpecificationempresa));

app.use(empresaApi);

const PORT = process.env.PORT || 8067;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
	console.log(`Swagger docs available at http://localhost:${PORT}/api-doc`);
    console.log(`Get operation available at http://localhost:${PORT}/operaciongetempresa`);
	console.log(`Get operation available at http://localhost:${PORT}/operaciongetempresaid/:id`);
	console.log(`Get operation available at http://localhost:${PORT}/operaciongetempresa/nombre/:nombreparqueadero`);
    console.log(`Get operation available at at http://localhost:${PORT}/operaciongetempresaparametro/parametro`);
    console.log(`Post operation available http://localhost:${PORT}/operacionpostempresa`);
    console.log(`Put operation available at http://localhost:${PORT}/operacionputempresa/parametro`);
    console.log(`Delete operation available at http://localhost:${PORT}/operaciondeleteempresaparametro/parametro`);
});

