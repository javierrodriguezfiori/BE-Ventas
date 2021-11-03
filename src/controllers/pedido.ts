import { Request, Response } from 'express';
import { savePedidoService, findPedidosByCompradorService } from '../services/pedido';

export const savePedido = async (req: Request, res: Response): Promise<void> => {
    try {
        await savePedidoService(req, res);
    } catch (e) {
        throw e;
    }
};

export const findPedidosByComprador = async (req: Request, res: Response): Promise<void> => {
    try {
        await findPedidosByCompradorService(req, res);
    } catch (e) {
        throw e;
    }
};
