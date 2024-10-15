
// apisimple.js

const express = require('express');
const { ModelCliente, modelcliente } = require('../../../domain/object/cliente/modelcliente'); 

var router = express.Router();

// GET
/**
 * @swagger
 * /operaciongetcliente:
 *   get:
 *     summary: Get all ModelCliente
 *     responses:
 *       200:
 *         description: List of ModelCliente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   documento:
 *                     type: string
 *                   nombreusuario:
 *                     type: string
 *                   email:
 *                     type: string
 *                   estado_civil:
 *                     type: string
 */

router.get("/operaciongetcliente", (req, res) => {
    res.status(200).json(modelcliente);
});

module.exports = router;


// Get by Parametro
/**
 * @swagger
 * /operaciongetclienteparametro/{parametro}:
 *   get:
 *     summary: Get ModelCliente by Parametro
 *     parameters:
 *       - name: parametro
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A specific ModelCliente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 documento:
 *                   type: string
 *                 nombreusuario:
 *                   type: string
 *                 email:
 *                   type: string
 *                 estado_civil:
 *                   type: string
 *       404:
 *         description: ModelCliente not found
 */

router.get('/operaciongetclienteparametro/:parametro', (req, res) => {
    const Parametro = req.params.parametro;
    const cliente = modelcliente.find(cliente => cliente.documento === Parametro);
    if (!cliente) {
        return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.status(200).json(cliente);
});
module.exports = router;


// POST
/**
 * @swagger
 * /operacionpostcliente:
 *   post:
 *     summary: Create a new ModelCliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               documento:
 *                 type: string
 *               nombreusuario:
 *                 type: string
 *               email:
 *                 type: string
 *               estado_civil:
 *                 type: string
 *     responses:
 *       201:
 *         description: ModelCliente created
 */
router.post('/operacionpostcliente', (req, res) => {
	const {documento, nombreusuario, email, estado_civil} = req.body;
	const newModeloCliente = new ModelCliente(documento, nombreusuario, email, estado_civil);
	modelcliente.push(newModeloCliente);
	res.status(201).json(newModeloCliente);	
});


// PUT
/**
 * @swagger
 * /operacionputcliente/{parametro}: 
 *   put:
 *     summary: Update an existing ModelCliente
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
 *               nombreusuario:
 *                 type: string
 *               email:
 *                 type: string
 *               estado_civil:
 *                 type: string
 *     responses:
 *       200:
 *         description: ModelCliente updated
 */

router.put('/operacionputcliente/:parametro', (req, res) => {
    const { documento, nombreusuario, email, estado_civil } = req.body;
    const clienteIndex = modelcliente.findIndex(cliente => cliente.documento === req.params.parametro);
    if (clienteIndex === -1) {
        return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    modelcliente[clienteIndex].documento = documento;
    modelcliente[clienteIndex].nombreusuario = nombreusuario;
    modelcliente[clienteIndex].email = email;
    modelcliente[clienteIndex].estado_civil = estado_civil;
    res.status(200).json(modelcliente[clienteIndex]);
});


// DELETE a user
/**
 * @swagger
 * /operaciondeleteclienteparametro/{parametro}:
 *   delete:
 *     summary: Delete a ModelCliente
 *     parameters:
 *       - name: parametro
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: ModelCliente deleted
 *       404:
 *         description: ModelCliente not found
 */

router.delete('/operaciondeleteclienteparametro/:parametro', (req, res) => {
    const Parametro = req.params.parametro;
    const clienteIndex = modelcliente.findIndex(cliente => cliente.documento === Parametro);
    if (clienteIndex === -1) {
        return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    modelcliente.splice(clienteIndex, 1);
    res.status(204).send();
});
module.exports = router;
