import { Request, Response } from 'express';
import { findProductosService, updateProductoService, saveProductoService, findProductosByVendedorService } from '../services/producto';

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

export const saveProducto = async (req: Request, res: Response): Promise<void> => {
    try {
        await saveProductoService(req, res);
    } catch (e) {
        throw e;
    }
};

export const findProductosByVendedor = async (req: Request, res: Response): Promise<void> => {
    try {
        await findProductosByVendedorService(req, res);
    } catch (e) {
        throw e;
    }
};