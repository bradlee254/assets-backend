import Asset from '../../Models/Assets/Assets';
import { Request, Response } from 'express';

class AssetController {
  async index(req:Request, res:Response) {
    const assets = await Asset.query().where('active', 1).get();
    return res.json(assets);
  }
  async show(req:Request, res:Response) {
    const asset = await Asset.find(req.params.id);
    if(!asset) return res.status(404).json({message: 'Asset not found'});
    return res.json(asset);
  }
  async store(req:Request, res:Response) {
    const asset = await Asset.create(req.body);
    return res.status(201).json(asset);
  }

  async update(req:Request, res:Response) {
    const asset = await Asset.find(req.params.id);
    if(!asset) 
      return res.status(404).json({message: 'Asset not found'});
    await asset.update(req.body);
    return res.json(asset);
  }

  async destroy(req:Request, res:Response) {
    const asset = await Asset.find(req.params.id);
    if(!asset) 
      return res.status(404).json({message: 'Asset not found'});
    await asset.delete();
    return res.status(204).send();
  }
}
export default new AssetController();