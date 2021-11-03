import { Schema, Document, model } from 'mongoose'

export interface IReclamo extends Document {
  idPedido: String,
  reclamo: String,
  estado: String,
};

export const ReclamoSchema = new Schema({
  idPedido: String,
  reclamo: String,
  estado: String,
})

const Reclamo = model<IReclamo>('Reclamo', ReclamoSchema);
export default Reclamo;
