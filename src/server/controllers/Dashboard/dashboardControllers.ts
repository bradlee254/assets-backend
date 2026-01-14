import { Request, Response } from 'express';
import Asset from '../../Models/Assets/Assets';

class DashboardController {
  static async getDashboardData(req: Request, res: Response) {
    try {
      const totalAssets = await Asset.countDocuments();
      const activeAssets = await Asset.countDocuments({ status: 'Active' });
      const assignedAssets = await Asset.countDocuments({ status: 'Assigned' });
      const maintenanceAssets = await Asset.countDocuments({ status: 'Maintenance' });
      const retiredAssets = await Asset.countDocuments({ status: 'Retired' });

      res.json({
        totalAssets,
        activeAssets,
        assignedAssets,
        maintenanceAssets,
        retiredAssets,
        lastSync: new Date()
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  }
}

export default DashboardController;
