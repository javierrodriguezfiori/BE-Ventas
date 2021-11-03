import { Request, Response } from 'express';
import { findProductosService, updateProductoService } from '../services/producto';

export const findProductos = async (req: Request, res: Response): Promise<void> => {
    try {
        await findProductosService(req, res);
    } catch (e) {
        throw e;
    }
};

export const updateProducto = async (req: Request, res: Response): Promise<void> => {
    try {
        await updateProductoService(req, res);
    } catch (e) {
        throw e;
    }
};