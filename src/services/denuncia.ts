import { Request, Response } from 'express'
import Denuncia from '../models/denuncia'

// categoría: falsificación, producto ilegal, fraude, contenido inapropiado
// POST: denuncia(idProducto: string, categoría: string, comentario: string) => void
export const saveDenunciaService = async (req: Request, res: Response) => {
  try {
    const denuncia = new Denuncia(req.body)
    await denuncia.save()
    return res.status(200).send('Denuncia generada correctamente')
  } catch (error) {
    res.status(500).send('Error: No se pudo guardar la denuncia')
  }
}
