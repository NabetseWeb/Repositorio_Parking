
// domain/object/geografia/modelgeografia.js

const modelgeografia = [];

class Modelgeografia{
	constructor(idpais, 
				nombrepais, 
				iddepartamento,
				nombredepartamento,
				idciudad, 
				nombreciudad){
		this.idpais = idpais;
		this.nombrepais = nombrepais;
		this.iddepartamento = iddepartamento;
		this.nombredepartamento = nombredepartamento;
		this.idciudad = idciudad;
		this.nombreciudad = nombreciudad;		
	}
}

module.exports = {Modelgeografia, modelgeografia};