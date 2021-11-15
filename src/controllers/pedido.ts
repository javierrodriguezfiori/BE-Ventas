import { Request, Response } from 'express';
import { updatePedidoService } from '../services/pedido';

export const updatePedido = async (req: Request, res: Response): Promise<void> => {
    try {
        await updatePedidoService(req, res);
    } catch (e) {
        throw e;
    }
};
