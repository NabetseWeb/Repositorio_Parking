
// swaggerspecification.js

const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'empresa API',
            version: '1.0.0',
            description: 'BackEnd_Swagger_Onion_Project'
        }
    },
    apis: ['./application/object/empresa/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
