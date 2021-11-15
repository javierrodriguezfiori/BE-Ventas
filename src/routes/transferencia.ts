import express from 'express'
import { transferencia } from '../controllers/transferencia'
// import healthController from '../controllers/health'

const router = express.Router()

//#region Swagger
/**
 * @swagger
 * tags:
 *   name: Transferencia
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Transferencia:
 *       type: object
 *       required:
 *         - numeroDeCuenta
 *         - monto
 *       properties:
 *         numeroDeCuenta:
 *           type: number
 *           description: Número de cuenta destino de la transferencia
 *         monto:
 *           type: number
 *           description: Importe a transferir de billetera virtual del usuario a cuenta destino
 *       example:
 *         numeroDeCuenta: 123456789
 *         monto: 1550,50
 */
//#endregion

// PUT: Transferencia (pasar dinero de billetera virtual a cuenta en banca)
//#region Swagger transferencia
/**
 * @swagger
 * /api/v1/transferencia:
 *   put:
 *     summary: Transfiere saldo de billetera virtual a una cuenta de banca
 *     tags: [Transferencia]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Transferencia'
 *     responses:
 *       200:
 *         description: Transferencia completada con éxito  
 *       500:
 *         description: No se pudo completar la transferencia
 */
//#endregion
router.put('/api/v1/transferencia', transferencia)

export default router
