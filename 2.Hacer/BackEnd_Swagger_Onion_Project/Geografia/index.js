
// index.js

const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const swaggerspecificationgeografia = require('./swagger/object/geografia/swaggerspecificationgeografia');
const geografiaApi = require('./application/object/geografia/apigeografia');

var app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerspecificationgeografia));

app.use(geografiaApi);

const PORT = process.env.PORT || 8067;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
	console.log(`Swagger docs available at http://localhost:${PORT}/api-doc`);
    console.log(`Get operation available at http://localhost:${PORT}/operaciongetgeografia`);
	console.log(`Get operation available at http://localhost:${PORT}/operaciongetgeografiaid/:id`);
	console.log(`Get operation available at http://localhost:${PORT}/operaciongetgeografia/nombre/:nombreciudad`);
    console.log(`Get operation available at http://localhost:${PORT}/operaciongetgeografiaparametro/parametro`);
	console.log(`Post operation available at http://localhost:${PORT}/operacionpostgeografia`);
	console.log(`Put operation available at http://localhost:${PORT}/operacionputgeografia/parametro`);
	console.log(`Delete operation available at http://localhost:${PORT}/operaciondeletegeografiaparametro/parametro`);
});

