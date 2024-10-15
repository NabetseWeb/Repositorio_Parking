// coregeografia.js

const { Modelgeografia, modelgeografia } = require('../../../domain/object/geografia/modelgeografia'); 
const { InfrastructureGeografia, infrastructuregeografia} = require('../../../infrastructure/object/geografia/infrastructuregeografia');


class Coregeografia {
	
	constructor(){	
	}

	// async consultargeografia(respuesta){
	// 	const infrastructuregeografia = new InfrastructureGeografia();	
	// 	try {
    //         return infrastructuregeografia.consultargeografia(respuesta);			
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// }	

	async consultargeografia(){
		const infrastructuregeografia = new InfrastructureGeografia();	
		try {
            return await infrastructuregeografia.consultargeografia();			
		} catch (err) {
			console.error(err.message);
		}
	}

	async consultargeografiaid(id){
		const infrastructuregeografia = new InfrastructureGeografia();	
		try {
            return await infrastructuregeografia.consultargeografiaid(id);			
		} catch (err) {
			console.error(err.message);
		}
	}

	async consultargeografianombreciudad(nombreciudad){
		const infrastructuregeografia = new InfrastructureGeografia();	
		try {
            return await infrastructuregeografia.consultargeografianombreciudad(nombreciudad);			
		} catch (err) {
			console.error(err.message);
		}
	}
}

module.exports = { Coregeografia };