import express from 'express'
import { updatePedido } from '../controllers/pedido'

const router = express.Router()

//#region Swagger
/**
 * @swagger
 * tags:
 *   name: Pedido
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Pedido:
 *       type: object
 *       required:
 *         - comprador
 *         - vendedor
 *         - productos
 *       properties:
 *         comprador:
 *           type: string
 *           description: Nombre del comprador
 *         vendedor:
 *           type: string
 *           description: Nombre del vendedor
 *         productos:
 *           type: array
 *           description: Productos incluidos en el pedido
 *           items:
 *              idProducto: string
 *              cantidad: number
 *         estado:
 *           type: string
 *           description: Estado del pedido
 *         fechaDeCreacion:
 *           type: Date
 *           description: Fecha de creacion del pedido
 *       example:
 *        comprador: ma_galperion
 *        vendedor: eze_leotta
 *        productos: [{idProducto: asd64a6s5d46as54dasd, cantidad: 5}]
 *        estado: En proceso
 *        fechaDeCreacion: Fri Oct 29 2021 21:14:50 GMT-0300
 */
//#endregion

/*Por cada venta pegarle al PUT: producto y actualizar el isVendido a true*/
//#region Swagger updatePedido
/**
 * @swagger
 * /api/v1/pedido:
 *   put:
 *     summary: Actualiza un pedido
 *     tags: [Pedido]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedido'
 *     responses:
 *       200:
 *         description: El pedido se actualizó correctamente
 *       404:
 *         description: El pedido no existe
 *       500:
 *         description: No se pudo actualizar el pedido
 */
//#endregion
router.put('/api/v1/pedido', updatePedido)

export default router
