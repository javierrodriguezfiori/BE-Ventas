import { Request, Response } from 'express'
import Producto from '../models/producto'

// POST: Producto
export const saveProductoService = async (req: Request, res: Response) => {
  try {
    const producto = new Producto(req.body)
    
    producto.isVendido= false
    producto.isActivo= false

    await producto.save()
    return res.status(200).send('El producto se creó correctamente')
  } catch (error) {
    res.status(500).send('Error: No se pudo crear el producto')
  }
}

// PUT: Producto. Validaciones de isVendido se harán en el front
export const updateProductoService = async (req: Request, res: Response) => {
  try {
    const productoWanted = await Producto.findById(req.body.id)

    if (productoWanted) {
      const producto = new Producto(req.body)

      const filter = { _id: producto.id }
      
      const update = {
        nombre: producto.nombre,
        precio: producto.precio,
        categoria: producto.categoria,
        stock: producto.stock,
        vendedor: producto.vendedor,
        metodosDePago: producto.metodosDePago,
        isActivo: producto.isActivo
      }
    
      await Producto.findOneAndUpdate(filter, update)
      res.status(200).send('Producto actualizado correctamente')
    } else res.status(404).send('Error: El producto no existe')
  } catch (error) {
    res.status(500).send('Error: No se pudo actualizar el producto')
  }
}

// GET(vendedor): [Producto]
export const findProductosByVendedorService = async (req: Request, res: Response) => {
  const productos = await Producto.find({ vendedor: req.params.vendedor }).exec()
  return res.status(200).send(productos)
}

