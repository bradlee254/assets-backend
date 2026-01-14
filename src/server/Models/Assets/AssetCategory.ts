import { Model } from '@/eloquent/Model';
import Asset from './Assets';

export class AssetCategory extends Model {
    static table = 'asset_categories';
    static primaryKey = 'id';

    static fillable = [
        'name', 'active', 'created_at', 'updated_at', 'deleted_at'
    ];
    static cast = {
        id: 'int',
        active: 'int',
        created_at: 'datetime',
        updated_at: 'datetime',
        deleted_at: 'datetime',
    } as any;
    
    assets(){
        return this.hasMany(Asset, 'category_id', 'id');
    }
    constructor(attributes: any = {}) {
        super({
            active: 1,
            ...attributes
        })
    }
}

export default AssetCategory;