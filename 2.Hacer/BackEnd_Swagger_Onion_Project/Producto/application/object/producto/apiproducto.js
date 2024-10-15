// apisimple.js

const express = require('express');
const { Modelproducto, modelproducto } = require('../../../domain/object/producto/modelproducto');

var router = express.Router();

// GET
/**
 * @swagger
 * /operaciongetproducto:
 *   get:
 *     summary: Get all ModelProducto
 *     responses:
 *       200:
 *         description: List of ModelProducto
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idproducto:
 *                     type: string
 *                   numerocelda:
 *                     type: string
 *                   tipovehiculo:
 *                     type: string
 *                   fechareserva:
 *                     type: string
 *                   horaentrada:
 *                     type: string
 *                   horasalida:
 *                     type: string
 */

router.get("/operaciongetproducto", (req, res) => {
    res.status(200).json(modelproducto);
});

// Get by Parametro
/**
 * @swagger
 * /operaciongetproductoparametro/{parametro}:
 *   get:
 *     summary: Get ModelProducto by Parametro
 *     parameters:
 *       - name: parametro
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A Item of ModelProducto
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idproducto:
 *                   type: string
 *                 numerocelda:
 *                   type: string
 *                 tipovehiculo:
 *                   type: string
 *                 fechareserva:
 *                   type: string
 *                 horaentrada:
 *                   type: string
 *                 horasalida:
 *                   type: string
 */
router.get('/operaciongetproductoparametro/:parametro', (req, res) => {
    const parametro = req.params.parametro;
    const producto = modelproducto.find(producto => producto.idproducto === parametro);

    if (producto) {
        res.status(200).json(producto);
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
});

// POST
/**
 * @swagger
 * /operacionpostproducto:
 *   post:
 *     summary: Create a new ModelProducto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idproducto:
 *                 type: string
 *               numerocelda:
 *                 type: string
 *               tipovehiculo:
 *                 type: string
 *               fechareserva:
 *                 type: string
 *               horaentrada:
 *                 type: string
 *               horasalida:
 *                 type: string
 *     responses:
 *       201:
 *         description: ModelProducto created
 */
router.post('/operacionpostproducto', (req, res) => {
    const { idproducto, numerocelda, tipovehiculo, fechareserva, horaentrada, horasalida } = req.body;
    const newproducto = new Modelproducto(idproducto, numerocelda, tipovehiculo, fechareserva, horaentrada, horasalida);
    modelproducto.push(newproducto);
    res.status(201).json(newproducto);
});

// PUT
/**
 * @swagger
 * /operacionputproducto/{parametro}:
 *   put:
 *     summary: Update an existing ModelProducto
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
 *               numerocelda:
 *                 type: string
 *               tipovehiculo:
 *                 type: string
 *               fechareserva:
 *                 type: string
 *               horaentrada:
 *                 type: string
 *               horasalida:
 *                 type: string
 *     responses:
 *       200:
 *         description: ModelProducto updated
 */
router.put('/operacionputproducto/:parametro', (req, res) => {
    const { numerocelda, tipovehiculo, fechareserva, horaentrada, horasalida } = req.body;
    const producto = modelproducto.find(producto => producto.idproducto === req.params.parametro);
    
    if (producto) {
        producto.numerocelda = numerocelda;
        producto.tipovehiculo = tipovehiculo;
        producto.fechareserva = fechareserva;
        producto.horaentrada = horaentrada;
        producto.horasalida = horasalida;

        res.status(200).json(producto);
    } else {
        res.status(404).json({ message: "Producto no encontrado" });
    }
});

// DELETE a ModelProducto
/**
 * @swagger
 * /operaciondeleteproductoparametro/{parametro}:
 *   delete:
 *     summary: Delete a ModelProducto
 *     parameters:
 *       - name: parametro
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: ModelProducto deleted
 */
router.delete('/operaciondeleteproductoparametro/:parametro', (req, res) => {
    const parametro = req.params.parametro;
    const productoIndex = modelproducto.findIndex(producto => producto.idproducto === parametro);

    if (productoIndex !== -1) {
        modelproducto.splice(productoIndex, 1);

        res.status(204).json({ message: 'Producto eliminado con éxito' });
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
});

module.exports = router;

