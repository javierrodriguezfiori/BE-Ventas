import express from 'express'
import { saveDenuncia } from '../controllers/denuncia'

const router = express.Router()

//#region Swagger
/**
 * @swagger
 * tags:
 *   name: Denuncia
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Denuncia:
 *       type: object
 *       required:
 *         - idProducto
 *         - categoria
 *         - comentario
 *       properties:
 *         idProducto:
 *           type: string
 *           description: Id del producto a denunciar
 *         categoria:
 *           type: string
 *           description: Categoria de la denuncia
 *         comentario:
 *           type: string
 *           description: Comentario sobre la denuncia
 *       example:
 *        idProducto: asd6565a1sdas61ads
 *        categoria: fraude
 *        comentario: el producto que intenta vender es una estafa
 */
//#endregion

//#region Swagger saveDenuncia
/**
 * @swagger
 * /api/v1/denuncia:
 *   post:
 *     summary: Genera una denuncia de un producto
 *     tags: [Denuncia]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Denuncia'
 *     responses:
 *       200:
 *         description: La denuncia se creo correctamente
 *       500:
 *         description: No se pudo guardar la denuncia
 */
//#endregion
router.post('/api/v1/denuncia', saveDenuncia)

export default router
