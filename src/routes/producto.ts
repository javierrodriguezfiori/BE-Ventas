import express from 'express'
import { findProductos, updateProducto } from '../controllers/producto'
import healthController from '../controllers/health'

const router = express.Router()

//#region Swagger
/**
 * @swagger
 * tags:
 *   name: Producto
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       required:
 *         - id
 *         - nombre
 *         - precio
 *         - categoria
 *         - stock
 *         - vendedor
 *         - metodosDePago
 *         - isActivo
 *       properties:
 *         id:
 *           type: string
 *           description: Id del producto
 *         nombre:
 *           type: string
 *           description: Nombre del producto
 *         precio:
 *           type: number
 *           description: Precio del producto
 *         categoria:
 *           type: string
 *           description: Categoria del producto
 *         stock:
 *           type: number
 *           description: Stock del producto
 *         vendedor:
 *           type: string
 *           description: Usuario del vendedor del producto
 *         metodosDePago:
 *           type: object
 *           description: Metodos de pago del producto
 *           required:
 *             - debito
 *             - credito
 *           properties:
 *             debito:
 *               type: boolean
 *               description: Permite abonar el producto con tarjeta de debito
 *             credito:
 *               type: boolean
 *               description: Permite abonar el producto con tarjeta de credito
 *         isActivo:
 *           type: bolean
 *           description: Activa o desactiva el producto
 *       example:
 *        id: asd6565a1sdas61ads
 *        nombre: Laptop Lenovo
 *        precio: 200000
 *        categoria: Notebook
 *        stock: 5
 *        vendedor: lenovo
 *        metodosDePago: {debito: true, credito: false}
 *        isActivo: true
 */
//#endregion

//#region Swagger findProductos
/**
 * @swagger
 * /api/v1/producto:
 *  get:
 *    summary: Trae todos los productos que son posibles de comprar (con stock mayor a 0 y activos de parte del vendedor).
 *    tags: [Producto]
 *    responses:
 *      200:
 *        description: Productos obtenidos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Producto'
 */
//#endregion
router.get('/api/v1/producto', findProductos)

//#region Swagger updateProducto
/**
 * @swagger
 * /api/v1/producto:
 *   put:
 *     summary: Actualiza un producto
 *     tags: [Producto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       200:
 *         description: El producto se actualizo correctamente
 *       404:
 *         description: El producto no existe
 *       500:
 *         description: No se pudo actualizar el producto
 */
//#endregion
router.put('/api/v1/producto', updateProducto)

router.get('/health', healthController.healthCheck)

export default router
