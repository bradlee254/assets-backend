import { Request, Response } from 'express';
import Asset from '../../Models/Assets/Assets';

export default {
    async getDashboardData(req: Request, res: Response) {
        try {
            const totalAssets = await Asset.countDocuments();
            const assignedAssets = await Asset.countDocuments({ assigned: true });
            
}