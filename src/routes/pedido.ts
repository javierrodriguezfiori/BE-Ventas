import express from 'express'
import { savePedido, findPedidosByComprador } from '../controllers/pedido'

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

//#region Swagger savePedido
/**
 * @swagger
 * /api/v1/pedido:
 *   post:
 *     summary: Genera un pedido nuevo
 *     tags: [Pedido]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedido'
 *     responses:
 *       200:
 *         description: El pedido se creo correctamente
 *       500:
 *         description: No se pudo crear el pedido
 */
//#endregion
router.post('/api/v1/pedido', savePedido)

//#region Swagger findProductos
/**
 * @swagger
 * /api/v1/pedido/{comprador}:
 *  get:
 *    summary: Trae todos los pedidos del usuario.
 *    tags: [Pedido]
 *    parameters:
 *      - in: path
 *        name: comprador
 *        schema:
 *          type: string
 *        required: true
 *        description: Nombre de usuario del comprador
 *    responses:
 *      200:
 *        description: Pedidos obtenidos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Pedido'
 */
//#endregion
router.get('/api/v1/pedido/:comprador', findPedidosByComprador)

export default router
