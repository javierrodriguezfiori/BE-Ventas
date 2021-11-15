import express from 'express'
import { saveProducto, updateProducto, findProductosByVendedor } from '../controllers/producto'
// import healthController from '../controllers/health'

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

// POST: Producto. idProducto: string. isVendido e isActivo default false
//#region Swagger saveProducto
/**
 * @swagger
 * /api/v1/producto:
 *  post:
 *    summary: Genera un producto nuevo
 *    tags: [Producto]
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Producto'
 *    responses:
 *      200:
 *         description: El pedido se creó correctamente
 *      500:   
 *        description: No se pudo crear el pedido
 */
//#endregion
router.get('/api/v1/producto', saveProducto)

// PUT: Producto. Validar stock. 
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
 *         description: El producto se actualizó correctamente
 *       404:
 *         description: El producto no existe
 *       500:
 *         description: No se pudo actualizar el producto
 */
//#endregion
router.put('/api/v1/producto', updateProducto)

//#region Swagger findProductos
/**
 * @swagger
 * /api/v1/producto/{vendedor}:
 *  get:
 *    summary: Trae todos los productos de ese vendedor
 *    tags: [Producto]
 *    parameters:
 *      - in: path
 *        name: vendedor
 *        schema:
 *          type: string
 *        required: true
 *        description: Nombre de usuario del vendedor
 *    responses:
 *      200:
 *        description: Productos obtenidos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Producto'
 *      404:
 *        description: No existen productos de ese vendedor
 */
//#endregion
router.get('/api/v1/producto', findProductosByVendedor)

export default router
