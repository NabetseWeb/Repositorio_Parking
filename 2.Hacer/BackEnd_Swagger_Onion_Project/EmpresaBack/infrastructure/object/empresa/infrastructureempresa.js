// infrastructuregeografia.js

const { MongoClient, ServerApiVersion, ObjectId} = require('mongodb');
const { Modelempresa, modelempresa } = require('../../../domain/object/empresa/modelempresa'); 

const uri = "mongodb+srv://dbaUsername:dbaPassword@cluster0.wiald.mongodb.net/Parking?retryWrites=true&w=majority";
const dbName = "Parking";
const collectionName = "Organización";

class Infrastructureempresa {
	
	constructor(){	
	}	
	
	async consultarempresa(){
		const client = new MongoClient(uri);
        const db = client.db(dbName);
        const col = db.collection(collectionName);	
		let results = [];
		try {
            results = await col.find().toArray();
            console.log('Empresas encontrados:', results.length);
			console.log(results);			
		} catch (err) {
			console.error(err);
			console.error(err.message);
		} finally {
			await client.close();
		}
		return results;	
	}

	async consultarempresaid(id){
		const client = new MongoClient(uri);
		const db = client.db(dbName);
		const col = db.collection(collectionName);
		let results = [];		
		try {
			results = await col.find({ "_id": new ObjectId(id) }).toArray();		
			console.log('Documentos encontrados:', results.length);
			console.log(results);			
		} catch (err) {
			console.error(err);
			console.error(err.message);
		} finally {
			await client.close();
		}
		return results;	
	}

	async consultarempresanombreparqueadero(nombreparqueadero){
		const client = new MongoClient(uri);
		const db = client.db(dbName);
		const col = db.collection(collectionName);
		let results = [];		
		try {
			results = await col.find({ "nombreparqueadero": nombreparqueadero }).toArray();		
			console.log('Documentos encontrados:', results.length);
			console.log(results);			
		} catch (err) {
			console.error(err);
			console.error(err.message);
		} finally {
			await client.close();
		}
		return results;	
	}
}

module.exports = { Infrastructureempresa };