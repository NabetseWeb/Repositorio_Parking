
// index.js

const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecification = require('./swagger/swaggerspecification');
const ApiSimple = require('./application/apisimple');

var app = express();

app.use(bodyParser.json());

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpecification));

app.use(ApiSimple);

const PORT = process.env.PORT || 8066;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
	console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
    console.log(`Get operation available at http://localhost:${PORT}/operacionget`);
    console.log(`Get operation available at http://localhost:${PORT}/operaciongetparametro/parametro`);	
	console.log(`Post operation available at http://localhost:${PORT}/operacionpost`);
	console.log(`Put operation available at http://localhost:${PORT}/operacionput/parametro`);
	console.log(`Delete operation available at http://localhost:${PORT}/operaciondeleteparametro/parametro`);
});

