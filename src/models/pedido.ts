import { Schema, Document, model } from 'mongoose'

export interface IProducto {
  idProducto: String,
  cantidad: Number
}

export interface IPedido extends Document {
  comprador: String,
  vendedor: String,
  productos: IProducto[],
  estado: String,
  fechaDeCreacion: Date
};

export const PedidoSchema = new Schema({
  comprador: String,
  vendedor: String,
  productos: [Object],
  estado: String,
  fechaDeCreacion: Date
})

const Pedido = model<IPedido>('Pedido', PedidoSchema);
export default Pedido;
