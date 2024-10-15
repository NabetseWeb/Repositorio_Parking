
// domain/object/cliente/modelcliente.js

const modelcliente = [];

class ModelCliente{
	constructor(documento, 
				nombreusuario, 
				email,
				estado_civil){
		this.documento = documento;
		this.nombreusuario = nombreusuario;
		this.email = email;
		this.estado_civil = estado_civil;		
	}
}

module.exports = {ModelCliente, modelcliente};