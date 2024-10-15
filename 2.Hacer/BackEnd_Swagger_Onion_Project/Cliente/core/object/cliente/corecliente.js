// coregeografia.js

const { ModelCliente, modelcliente } = require('../../../domain/object/cliente/modelcliente'); 
const { Infrastructurecliente } = require('../../../infrastructure/object/cliente/infrastructurecliente'); 

class Corecliente {
	
	constructor(){	
	}

	async consultargeografia(){
		const client = new MongoClient(uri);
        const db = client.db(dbName);
        const col = db.collection(collectionName);	
		let results = [];
		try {
            results = await col.find().toArray();
            console.log('Documentos encontrados:', results.length);
			console.log(results);			
		} catch (err) {
			console.error(err);
			console.error(err.message);
		} finally {
			await client.close();
		}
		return results;	
}
}

module.exports = { Corecliente };