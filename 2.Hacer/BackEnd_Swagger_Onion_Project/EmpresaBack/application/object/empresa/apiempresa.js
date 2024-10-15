// apisimple.js

const express = require('express');
const { Modelempresa, modelempresa } = require('../../../domain/object/empresa/modelempresa');
const { Coreempresa, coreempresa } = require('../../../core/object/empresa/coreempresa');

var router = express.Router();

// GET
/**
 * @swagger
 * /operaciongetempresa:
 *   get:
 *     summary: Get all Modelempresa
 *     responses:
 *       200:
 *         description: List of Modelempresa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idparqueadero:
 *                     type: string
 *                   nombreparqueadero:
 *                     type: string
 *                   idempleado:
 *                     type: string
 *                   nombreempleado:
 *                     type: string
 */
router.get('/operaciongetempresa', async (req, res) => {
	try {
		const coreempresa = new Coreempresa();
		const respuestacoreempresa = await coreempresa.consultarempresa();
		res.status(200).json(respuestacoreempresa);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});
// GET by Id
/**
 * @swagger
 * /operaciongetempresaid/{id}:
 *   get:
 *     summary: Get Modelempresa by Id
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A Item of Modelempresa
 */
router.get('/operaciongetempresaid/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const coreempresa = new Coreempresa();
		const respuestacoreempresa = await coreempresa.consultarempresaid(id);
		res.status(200).json(respuestacoreempresa);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// GET por Nombre
/**
 * @swagger
 * /operaciongetempresa/nombre/{nombreparqueadero}:
 *   get:
 *     summary: Get a Modelempresa by nombreparqueadero
 *     parameters:
 *       - in: path
 *         name: nombreparqueadero
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del parqueadero (nombreparqueadero)
 *     responses:
 *       200:
 *         description: Modelempresa encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idparqueadero:
 *                   type: string
 *                 nombreparqueadero:
 *                   type: string
 *                 idempleado:
 *                   type: string
 *                 nombreempleado:
 *                   type: string
 *       404:
 *         description: No se encontró el registro
 */
router.get('/operaciongetempresa/nombre/:nombreparqueadero', async (req, res) => {
  try {
    const { nombreparqueadero } = req.params;
    const coreempresa = new Coreempresa();
    const empresa = await coreempresa.consultarempresanombreparqueadero(nombreparqueadero);
    
    if (!empresa) {
      return res.status(404).json({ error: 'No se encontró el registro' });
    }

    res.status(200).json(empresa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Get by Parametro
/**
 * @swagger
 * /operaciongetempresaparametro/{parametro}:
 *   get:
 *     summary: Get Modelempresa by Parametro
 *     parameters:
 *       - name: parametro
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A Item of Modelempresa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idparqueadero:
 *                   type: string
 *                 nombreparqueadero:
 *                   type: string
 *                 idempleado:
 *                   type: string
 *                 nombreempleado:
 *                   type: string
 */
router.get('/operaciongetempresaparametro/:parametro', (req, res) => {
    const parametro = req.params.parametro;
    const empresa = modelempresa.find(empresa => empresa.idparqueadero === parametro);

    if (empresa) {
        res.status(200).json(empresa);
    } else {
        res.status(404).json({ message: 'Empresa no encontrada' });
    }
});

// POST
/**
 * @swagger
 * /operacionpostempresa:
 *   post:
 *     summary: Create a new Modelempresa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idparqueadero:
 *                 type: string
 *               nombreparqueadero:
 *                 type: string
 *               idempleado:
 *                 type: string
 *               nombreempleado:
 *                 type: string
 *     responses:
 *       201:
 *         description: Modelempresa created
 */
router.post('/operacionpostempresa', (req, res) => {
    const { idparqueadero, nombreparqueadero, idempleado, nombreempleado } = req.body;
    const newempresa = new Modelempresa(idparqueadero, nombreparqueadero, idempleado, nombreempleado);
    modelempresa.push(newempresa);
    res.status(201).json(newempresa);
});

// PUT
/**
 * @swagger
 * /operacionputempresa/{parametro}:
 *   put:
 *     summary: Update an existing Modelempresa
 *     parameters:
 *       - name: parametro
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombreparqueadero:
 *                 type: string
 *               idempleado:
 *                 type: string
 *               nombreempleado:
 *                 type: string
 *     responses:
 *       200:
 *         description: Modelempresa updated
 */
router.put('/operacionputempresa/:parametro', (req, res) => {
    const { nombreparqueadero, idempleado, nombreempleado } = req.body;
    const empresa = modelempresa.find(empresa => empresa.idparqueadero === req.params.parametro);

    if (empresa) {
        empresa.nombreparqueadero = nombreparqueadero;
        empresa.idempleado = idempleado;
        empresa.nombreempleado = nombreempleado;

        res.status(200).json(empresa);
    } else {
        res.status(404).json({ message: "Empresa no encontrada" });
    }
});

// DELETE a Modelempresa
/**
 * @swagger
 * /operaciondeleteempresaparametro/{parametro}:
 *   delete:
 *     summary: Delete a Modelempresa
 *     parameters:
 *       - name: parametro
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Modelempresa deleted
 */
router.delete('/operaciondeleteempresaparametro/:parametro', (req, res) => {
    const Parametro = req.params.parametro;
    const empresaIndex = modelempresa.findIndex(empresa => empresa.documento === Parametro);
    if (empresaIndex === -1) {
        return res.status(404).json({ message: 'empresa no encontrado' });
    }
    modelempresa.splice(empresaIndex, 1);
    res.status(204).send();
});
module.exports = router;
