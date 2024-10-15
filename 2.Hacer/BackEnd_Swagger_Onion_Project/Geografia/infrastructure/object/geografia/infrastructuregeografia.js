// infrastructuregeografia.js


const { MongoClient, ServerApiVersion, ObjectId} = require('mongodb');
const { Modelgeografia, modelgeografia } = require('../../../domain/object/geografia/modelgeografia'); 

const uri = "mongodb+srv://dbaUsername:dbaPassword@cluster0.wiald.mongodb.net/Parking?retryWrites=true&w=majority";
const dbName = "Parking";
const collectionName = "Geografia";

class InfrastructureGeografia {
	
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
		return results;	
	}

	async consultargeografiaid(id){
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

	async consultargeografianombreciudad(nombreciudad){
		const client = new MongoClient(uri);
		const db = client.db(dbName);
		const col = db.collection(collectionName);
		let results = [];		
		try {
			results = await col.find({ "nombreciudad": nombreciudad }).toArray();		
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

module.exports = { InfrastructureGeografia };