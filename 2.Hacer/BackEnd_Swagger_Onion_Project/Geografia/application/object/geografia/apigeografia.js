// apisimple.js

const express = require('express');
const { Modelgeografia, modelgeografia } = require('../../../domain/object/geografia/modelgeografia');
const { Coregeografia, coregeografia } = require('../../../core/object/geografia/coregeografia');

var router = express.Router();

// GET
/**
 * @swagger
 * /operaciongetgeografia:
 *   get:
 *     summary: Get all ModelGeografia
 *     responses:
 *       200:
 *         description: List of ModelGeografia
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idpais:
 *                     type: string
 *                   nombrepais:
 *                     type: string
 *                   iddepartamento:
 *                     type: string
 *                   nombredepartamento:
 *                     type: string
 *                   idciudad:
 *                     type: string
 *                   nombreciudad:
 *                     type: string
 */
router.get('/operaciongetgeografia', async (req, res) => {
	try {
		const coregeografia = new Coregeografia();
		const respuestacoregeografia = await coregeografia.consultargeografia();
		res.status(200).json(respuestacoregeografia);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Get by Id
/**
 * @swagger
 * /operaciongetgeografiaid/{id}:
 *   get:
 *     summary: Get Modelgeografia by Id
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A Item of Modelgeografia
 */
router.get('/operaciongetgeografiaid/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const coregeografia = new Coregeografia();
		const respuestacoregeografia = await coregeografia.consultargeografiaid(id);
		res.status(200).json(respuestacoregeografia);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});
// GET por Nombre
/**
 * @swagger
 * /operaciongetgeografia/nombre/{nombreciudad}:
 *   get:
 *     summary: Get a ModelGeografia by nombreciudad
 *     parameters:
 *       - in: path
 *         name: nombreciudad
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de la ciudad (nombreciudad)
 *     responses:
 *       200:
 *         description: ModelGeografia encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idpais:
 *                   type: string
 *                 nombrepais:
 *                   type: string
 *                 iddepartamento:
 *                   type: string
 *                 nombredepartamento:
 *                   type: string
 *                 idciudad:
 *                   type: string
 *                 nombreciudad:
 *                   type: string
 *       404:
 *         description: No se encontró el registro
 */
router.get('/operaciongetgeografia/nombre/:nombreciudad', async (req, res) => {
  try {
    const { nombreciudad } = req.params;
    const coregeografia = new Coregeografia();
    const geografia = await coregeografia.consultargeografianombreciudad(nombreciudad);
    
    if (!geografia) {
      return res.status(404).json({ error: 'No se encontró el registro' });
    }

    res.status(200).json(geografia);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Get by Parametro
/**
 * @swagger
 * /operaciongetgeografiaparametro/{parametro}:
 *   get:
 *     summary: Get ModelGeografia by Parametro
 *     parameters:
 *       - name: parametro
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A Item of ModelGeografia
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idpais:
 *                   type: string
 *                 nombrepais:
 *                   type: string
 *                 iddepartamento:
 *                   type: string
 *                 nombredepartamento:
 *                   type: string
 *                 idciudad:
 *                   type: string
 *                 nombreciudad:
 *                   type: string
 */
router.get('/operaciongetgeografiaparametro/:parametro', async (req, res) => {
	try {
		const { parametro } = req.params;
		const coregeografia = new Coregeografia();
		const respuestacoregeografia = await coregeografia.consultargeografiaid(parametro);
		res.status(200).json(respuestacoregeografia);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// POST
/**
 * @swagger
 * /operacionpostgeografia:
 *   post:
 *     summary: Create a new ModelGeografia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idpais:
 *                 type: string
 *               nombrepais:
 *                 type: string
 *               iddepartamento:
 *                 type: string
 *               nombredepartamento:
 *                 type: string
 *               idciudad:
 *                 type: string
 *               nombreciudad:
 *                 type: string
 *     responses:
 *       201:
 *         description: ModelGeografia created
 */
router.post('/operacionpostgeografia', (req, res) => {
    const { idpais, nombrepais, iddepartamento, nombredepartamento, idciudad, nombreciudad } = req.body;
    const newGeografia = new ModelGeografia(idpais, nombrepais, iddepartamento, nombredepartamento, idciudad, nombreciudad);
    modelgeografia.push(newGeografia);
    res.status(201).json(newGeografia);
});

// PUT
/**
 * @swagger
 * /operacionputgeografia/{parametro}: 
 *   put:
 *     summary: Update an existing ModelGeografia
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
 *               idpais:
 *                 type: string
 *               nombrepais:
 *                 type: string
 *               iddepartamento:
 *                 type: string
 *               nombredepartamento:
 *                 type: string
 *               idciudad:
 *                 type: string
 *               nombreciudad:
 *                 type: string
 *     responses:
 *       200:
 *         description: ModelGeografia updated
 */
router.put('/operacionputgeografia/:parametro', (req, res) => {
    const { nombrepais, iddepartamento, nombredepartamento, idciudad, nombreciudad } = req.body;
    const geografia = modelgeografia.find(geo => geo.idpais === req.params.parametro);

    if (geografia) {
        geografia.nombrepais = nombrepais;
        geografia.iddepartamento = iddepartamento;
        geografia.nombredepartamento = nombredepartamento;
        geografia.idciudad = idciudad;
        geografia.nombreciudad = nombreciudad;

        res.status(200).json(geografia);
    } else {
        res.status(404).json({ message: "Geografía no encontrada" });
    }
});

// DELETE
/**
 * @swagger
 * /operaciondeletegeografiaparametro/{parametro}:
 *   delete:
 *     summary: Delete a ModelGeografia
 *     parameters:
 *       - name: parametro
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: ModelGeografia deleted
 */
router.delete('/operaciondeletegeografiaparametro/:parametro', (req, res) => {
    const parametro = req.params.parametro;
    const index = modelgeografia.findIndex(geo => geo.idpais === parametro);

    if (index !== -1) {
        modelgeografia.splice(index, 1);
        res.status(200).json({ message: `Geografía eliminada: ${parametro}` });
    } else {
        res.status(404).json({ message: 'Geografía no encontrada' });
    }
});

module.exports = router;
