
// domain/object/cliente/modelcliente.js

const modelempresa = [];

class Modelempresa{
	constructor(idparqueadero, 
				nombreparqueadero, 
				idempleado,
				nombreempleado){
		this.idparqueadero = idparqueadero;
		this.nombreparqueadero = nombreparqueadero;
		this.idempleado = idempleado;
		this.nombreempleado = nombreempleado;		
	}
}

module.exports = {Modelempresa, modelempresa};