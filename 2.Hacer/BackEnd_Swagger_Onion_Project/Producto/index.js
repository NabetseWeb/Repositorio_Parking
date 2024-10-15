
// index.js

const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecificationproducto = require('./swagger/object/producto/swaggerspecificationproducto');
const productoApi = require('./application/object/producto/apiproducto');

var app = express();

app.use(bodyParser.json());

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpecificationproducto));

app.use(productoApi);

const PORT = process.env.PORT || 8067;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
	console.log(`Swagger docs available at http://localhost:${PORT}/api-doc`);
    console.log(`Get operation available at http://localhost:${PORT}/operaciongetproducto`);
    console.log(`Get operation available at http://localhost:${PORT}/operaciongetproductoparametro/parametro`);	
	console.log(`Post operation available at http://localhost:${PORT}/operacionpostproducto`);
	console.log(`Put operation available at http://localhost:${PORT}/operacionputproducto/parametro`);
	console.log(`Delete operation available at http://localhost:${PORT}/operaciondeleteproductoparametro/parametro`);
});

