
// index.js

const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const swaggerSpecificationcliente = require('./swagger/object/cliente/swaggerSpecificationcliente');
const clienteApi = require('./application/object/cliente/apicliente');

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpecificationcliente));

app.use(clienteApi);

const PORT = process.env.PORT || 8067;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
	console.log(`Swagger docs available at http://localhost:${PORT}/api-doc`);
    console.log(`Get operation available at http://localhost:${PORT}/operaciongetcliente`);
    console.log(`Get operation available at at http://localhost:${PORT}/operaciongetclienteparametro/parametro`);
    console.log(`Post operation available http://localhost:${PORT}/operacionpostcliente`);
    console.log(`Put operation available at http://localhost:${PORT}/operacionputcliente/parametro`);
    console.log(`Delete operation available at http://localhost:${PORT}/operaciondeleteclienteparametro/parametro`);
});

