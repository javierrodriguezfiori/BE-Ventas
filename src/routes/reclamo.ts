import express from 'express'
import { saveReclamo } from '../controllers/reclamo'

const router = express.Router()

//#region Swagger
/**
 * @swagger
 * tags:
 *   name: Reclamo
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Reclamo:
 *       type: object
 *       required:
 *         - idPedido
 *         - reclamo
 *       properties:
 *         idPedido:
 *           type: string
 *           description: Id del pedido
 *         reclamo:
 *           type: string
 *           description: Reclamo escrito por el usuario
 *         estado:
 *           type: string
 *           description: Estado del reclamo
 *       example:
 *        idPedido: asd6565a1sdas61ads
 *        reclamo: El producto vino defectuoso
 */
//#endregion

//#region Swagger saveReclamo
/**
 * @swagger
 * /api/v1/reclamo:
 *   post:
 *     summary: Genera un reclamo de un pedido
 *     tags: [Reclamo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reclamo'
 *     responses:
 *       200:
 *         description: El reclamo se creo correctamente
 *       500:
 *         description: No se pudo guardar el reclamo
 */
//#endregion
router.post('/api/v1/reclamo', saveReclamo)

export default router
