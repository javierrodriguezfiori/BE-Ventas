import { Schema, Document, model } from 'mongoose'

export interface IDenuncia extends Document {
  idProducto: String,
  categoria: String,
  comentario: String,
};

export const DenunciaSchema = new Schema({
  idProducto: String,
  categoria: String,
  comentario: String,
})

const Denuncia = model<IDenuncia>('Denuncia', DenunciaSchema);
export default Denuncia;
