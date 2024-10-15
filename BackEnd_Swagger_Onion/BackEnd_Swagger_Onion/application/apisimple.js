
// apisimple.js

const express = require('express');
const { CargaUtil, cargautil } = require('../domain/cargautil'); 

var router = express.Router();

// GET
/**
 * @swagger
 * /operacionget:
 *   get:
 *     summary: Get all CargaUtil
 *     responses:
 *       200:
 *         description: List of CargaUtil
 */
router.get("/operacionget", (req, res) => {
	let Respuesta = ["Esto", "Es", "Una", "Prueba", "Get"];
	res.json(Respuesta);	
	//res.json(cargautil);
});

// Get by Parametro
/**
 * @swagger
 * /operaciongetparametro/{parametro}:
 *   get:
 *     summary: Get CargaUtil by Parametro
 *     parameters:
 *       - name: parametro
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A Item of CargaUtil
 */
router.get('/operaciongetparametro/:parametro', (req, res) => {
	const Parametro = req.params.parametro;
	let Respuesta = ["Esto", "Es", "Una", "Prueba", "Get", "Con", "Parametro:", Parametro];

	res.status(201).json(Respuesta);
});

// POST
/**
 * @swagger
 * /operacionpost:
 *   post:
 *     summary: Create a new CargaUtil
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               documento:
 *                 type: string
 *               nombres:
 *                 type: string
 *               apellidos:
 *                 type: string 
 *     responses:
 *       201:
 *         description: CargaUtil created
 */
router.post('/operacionpost', (req, res) => {
	const {documento, nombres, apellidos} = req.body;
	const newCargaUtil = new CargaUtil(documento, nombres, apellidos);
	cargautil.push(newCargaUtil);
	res.status(201).json(newCargaUtil);	
});

// PUT
/**
 * @swagger
 * /operacionput/{parametro}: 
 *   put:
 *     summary: Update an existing CargaUtil
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
 *               documento:
 *                 type: string
 *               nombres:
 *                 type: string
 *               apellidos:
 *                 type: string 
 *     responses:
 *       200:
 *         description: CargaUtil updated
 */
router.put('/operacionput/:parametro', (req, res) => {
    const { documento, nombres, apellidos } = req.body;
	const newCargaUtil = new CargaUtil(documento, nombres, apellidos);
	
    newCargaUtil.documento = req.params.parametro;
	
    newCargaUtil.nombres = nombres;
	newCargaUtil.apellidos = apellidos;

	res.status(201).json(newCargaUtil);
});

// DELETE a user
/**
 * @swagger
 * /operaciondeleteparametro/{parametro}:
 *   delete:
 *     summary: Delete a CargaUtil
 *     parameters:
 *       - name: parametro
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: CargaUtil deleted
 */
router.delete('/operaciondeleteparametro/:parametro', (req, res) => {	
	//const { parametro } = req.params;
	const Parametro = req.params.parametro;
	let Respuesta = ["Esto", "Es", "Una", "Prueba", "Delete", "Con", "Parametro:", Parametro];

	//res.status(200).json(Respuesta);
	res.status(200).json({ Message: 'Eliminado: ' + Parametro });	
});

module.exports = router;