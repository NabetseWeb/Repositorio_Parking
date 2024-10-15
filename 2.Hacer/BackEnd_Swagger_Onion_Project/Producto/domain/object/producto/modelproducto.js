
// domain/object/geografia/modelgeografia.js

const modelproducto = [];

class Modelproducto{
	constructor(idproducto, 
				numerocelda, 
				tipovehiculo,
				fechareserva,
				horaentrada, 
				horasalida){
		this.idproducto = idproducto;
		this.numerocelda = numerocelda;
		this.tipovehiculo = tipovehiculo;
		this.fechareserva = fechareserva;
		this.horaentrada = horaentrada;
		this.horasalida = horasalida;		
	}
}

module.exports = {Modelproducto, modelproducto};