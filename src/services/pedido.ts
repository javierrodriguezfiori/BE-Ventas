import { Request, Response } from 'express'
import Pedido from '../models/pedido'
import { IProducto } from '../models/pedido'
import { updateStock } from './producto'

// estado: string. Lo agrega el back end además del array de productos (En proceso, Cancelado, Despachado, Entregado). Actualiza el stock de los productos. fechaDeCreacion: DateTime. Por cada venta pegarle al PUT: producto y actualizar el isVendido a true
// POST: pedido(comprador: string, vendedor: string, Productos[{idProducto: string, cantidad: number}]) => void
export const savePedidoService = async (req: Request, res: Response) => {
  try {
    const pedido = new Pedido(req.body)
    //Agrego atributo estado en proceso porque recien se crea el pedido
    pedido.estado = 'En proceso'
    //Agrego la fecha de creacion del pedido
    pedido.fechaDeCreacion = new Date()
    //Actualizo el stock de los productos
    const productos: IProducto[] = req.body.productos
    productos.forEach(async (item: IProducto) => await updateStock(item))

    await pedido.save()
    return res.status(200).send('Pedido generado correctamente')
  } catch (error) {
    res.status(500).send('Error: No se pudo guardar el pedido')
  }
}

export const findPedidosByCompradorService = async (req: Request, res: Response) => {
  const pedidos = await Pedido.find({ comprador: req.params.comprador }).exec()
  return res.status(200).send(pedidos)
}

export const updatePedidoService = async (req: Request, res: Response) => {
  try {
    const pedido = new Pedido(req.body)
    //Agrego atributo estado en proceso porque recien se crea el pedido
    pedido.estado = 'En proceso'
    //Agrego la fecha de creacion del pedido
    pedido.fechaDeCreacion = new Date()
    //Actualizo el stock de los productos
    const productos: IProducto[] = req.body.productos
    productos.forEach(async (item: IProducto) => await updateStock(item))

    await pedido.save()
    return res.status(200).send('Pedido generado correctamente')
  } catch (error) {
    res.status(500).send('Error: No se pudo guardar el pedido')
  }
}
