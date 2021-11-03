import { Request, Response } from 'express';
import { saveReclamoService } from '../services/reclamo';

export const saveReclamo = async (req: Request, res: Response): Promise<void> => {
    try {
        await saveReclamoService(req, res);
    } catch (e) {
        throw e;
    }
};