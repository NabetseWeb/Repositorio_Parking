// infrastructuregeografia.js

const { MongoClient } = require('mongodb');
const { Modelproducto, modelproducto } = require('../../../domain/object/geografia/modelproducto'); 

const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
const dbName = 'mi_base_de_datos';
const collectionName = 'mi_coleccion';

class Infrastructureproducto {
	
	constructor(){	
	}	
	
	async consultarproducto(respuesta){
		const client = new MongoClient(uri);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);		
		let query = {};
		const query = { title: '123' };
		try {
            const result = await collection.find(query).toArray();
			const result = await collection.findOne(query);
            console.log('Documentos encontrados:', result.length);
			console.log(result);			
		} catch (error) {
			console.error(error);
		} finally {
			await client.close();
		}
		return respuesta;	
	}
	
}

module.exports = { Infrastructureproducto};