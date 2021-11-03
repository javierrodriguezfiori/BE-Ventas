import { Request, Response } from 'express';
import { saveDenunciaService } from '../services/denuncia';

export const saveDenuncia = async (req: Request, res: Response): Promise<void> => {
    try {
        await saveDenunciaService(req, res);
    } catch (e) {
        throw e;
    }
};