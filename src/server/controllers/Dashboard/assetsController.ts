import { Request, Response } from 'express';
import Asset, { IAsset } from '../../Models/Assets/Assets';

// Controller class
class AssetController {

  // GET /api/assets
  static async index(req: Request, res: Response) {
    try {
      const assets = await Asset.query().all(); // newest first
      res.status(200).json(assets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to fetch assets' });
    }
  }

  // GET /api/assets/:id
  static async show(req: Request, res: Response) {
    try {
      const asset = await Asset.find(req.params.id);
      if (!asset) return res.status(404).json({ message: 'Asset not found' });
      res.status(200).json(asset);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to fetch asset' });
    }
  }

  // POST /api/assets
  static async store(req: Request, res: Response) {
    try {
      const data: Partial<IAsset> = req.body;

      // Validate required fields
      if (!data.name || !data.type || !data.category || !data.department || !data.purchaseDate) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      const newAsset = await Asset.create(data);
      res.status(201).json(newAsset);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create asset' });
    }
  }

  // PUT /api/assets/:id
  static async update(req: Request, res: Response) {
    try {
      const asset = await Asset.find(req.params.id);
      if (!asset) return res.status(404).json({ message: 'Asset not found' });

      Object.assign(asset, req.body);
      await asset.save();

      res.status(200).json(asset);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to update asset' });
    }
  }

  // DELETE /api/assets/:id
  static async destroy(req: Request, res: Response) {
    try {
      const asset = await Asset.findById(req.params.id);
      if (!asset) return res.status(404).json({ message: 'Asset not found' });

      await asset.deleteOne();
      res.status(200).json({ message: 'Asset deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to delete asset' });
    }
  }
}

export default AssetController;
