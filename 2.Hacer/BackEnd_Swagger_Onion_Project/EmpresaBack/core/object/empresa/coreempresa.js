const { ModelCliente, modelcliente } = require('../../../domain/object/empresa/modelempresa'); 
const { Infrastructureempresa, infrastructureempresa } = require('../../../infrastructure/object/empresa/infrastructureempresa'); 

class Coreempresa {
	
	constructor(){	
	}

	async consultarempresa(){
		const infrastructureempresa = new Infrastructureempresa();	
		try {
            
            return await infrastructureempresa.consultarempresa();			
		} catch (err) {
			console.error(err.message);
		}
	}

	async consultarempresaid(id){
		const infrastructureempresa = new Infrastructureempresa();	
		try {
            return await infrastructureempresa.consultarempresaid(id);			
		} catch (err) {
			console.error(err.message);
		}
	}

	async consultarempresanombreparqueadero(nombreparqueadero){
		const infrastructureempresa = new Infrastructureempresa();	
		try {
            return await infrastructureempresa.consultarempresanombreparqueadero(nombreparqueadero);			
		} catch (err) {
			console.error(err.message);
		}
	}
}

module.exports = { Coreempresa };
