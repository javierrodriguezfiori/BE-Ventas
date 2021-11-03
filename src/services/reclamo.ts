import { Request, Response } from 'express'
import Reclamo from '../models/reclamo'

// estado: string(A resolver, Resuelto, Rechazado), verificar en el front que el pedido esté en estado Entregado y hayan pasado menos dias del límite que seteamos en la variable de entorno
// POST: reclamo(idPedido: string, reclamo: string) => mensaje: string(en caso de error)
export const saveReclamoService = async (req: Request, res: Response) => {
  try {
    const reclamo = new Reclamo(req.body)
    //Agrego atributo estado a resolver porque recien se crea el reclamo
    reclamo.estado = 'A resolver'
  
    await reclamo.save()
    return res.status(200).send('Reclamo generado correctamente')
  } catch (error) {
    res.status(500).send('Error: No se pudo guardar el reclamo')
  }
}
