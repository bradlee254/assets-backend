import { Request, Response } from 'express';
import Asset from '../../Models/Assets/Assets';

class DashboardController {
    async stats(req: Request, res: Response) {
        const totalAssets = await Asset.query().count();
        const activeAssets = await Asset.query().where('active', 1).count();
        const assignedAssets = await Asset.query().where('status', 'Assigned').count();
        const maintananceAssets = await Asset.query().where('status', 'Maintenance').count();
        const retiredAssets = await Asset.query().where('status', 'Retired').count();

        return res.json({
            totalAssets,
            activeAssets,
            assignedAssets,
            maintananceAssets,
            retiredAssets
        });
    }

}
export default new DashboardController();