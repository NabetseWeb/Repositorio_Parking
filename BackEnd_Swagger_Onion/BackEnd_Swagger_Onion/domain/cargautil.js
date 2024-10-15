
// domain/cargautil.js

const cargautil = [];

class CargaUtil {
    constructor(documento, nombres, apellidos) {
        this.documento = documento;
		this.nombres = nombres;
        this.apellidos = apellidos;
    }
}

module.exports = { CargaUtil, cargautil };