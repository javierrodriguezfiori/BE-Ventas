import { Request, Response } from 'express'
import { IProducto } from '../models/pedido'
import Producto from '../models/producto'

//no traer los que tengan stock en 0
//GET: producto => Productos[{idProducto: string, nombre: string, precio: number, categoria: string, stock: number, vendedor: string(usuario), metodosDePago: {débito: boolean, crédito: boolean}, isActivo: boolean}]
export const findProductosService = async (req: Request, res: Response) => {
  const productos = await Producto.find({ stock: { $gt: 0 }, isActivo: true }).exec()
  return res.status(200).send(productos)
}

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

export const updateStock = async (productoReq: IProducto) => {
  try {
    const idProducto = productoReq.idProducto
    const productoWanted = await Producto.findById(idProducto)

    if (productoWanted) {
      //@ts-ignore
      const stockFinal = productoWanted.stock - productoReq.cantidad
      const isActivo = stockFinal > 0 //Si es mayor a 0 sigue activo, sino es porque se vendio todo el stock 

      const filter = { _id: idProducto }
      const update = {
        stock: stockFinal,
        isActivo: isActivo
      }

      await Producto.findOneAndUpdate(filter, update)
    } 
  } catch (error) {
  }
}

// POST: Producto --> Implementar
export const saveProductoService = async (req: Request, res: Response) => {
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

// GET: [Producto] --> Implementar
export const findProductosByVendedorService = async (req: Request, res: Response) => {
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

