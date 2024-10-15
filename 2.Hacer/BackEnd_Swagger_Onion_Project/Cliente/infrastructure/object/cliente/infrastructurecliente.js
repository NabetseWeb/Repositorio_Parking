// infrastructuregeografia.js

const { MongoClient } = require('mongodb');
const { Modelcliente, modelcliente } = require('../../../domain/object/geografia/modelcliente'); 

const uri = "mongodb+srv://dbaUsername:dbaPassword@cluster0.m2gc7.mongodb.net/dbaCucharaDePalo?retryWrites=true&w=majority";
const dbName = "dbaCucharaDePalo";
const collectionName = "Geografia";

class Infrastructurecliente {
	
	constructor(){	
	}	
	
	async consultarcliente(respuesta){
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

module.exports = { Infrastructurecliente };