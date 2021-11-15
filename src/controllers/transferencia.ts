import { Request, Response } from 'express';
import { transferenciaService } from '../services/transferencia';

export const transferencia = async (req: Request, res: Response): Promise<void> => {
    try {
        await transferenciaService(req, res);
    } catch (e) {
        throw e;
    }
};
