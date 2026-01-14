import { Model } from "@/eloquent/Model";
import AssetCategory from "./AssetCategory";


export  class Asset extends Model{
    static table = 'assets';
    static primaryKey = 'id';

    static fillable = [
        'name','type', 'category_id', 'status', 'department','assigned_to',
        'purchase_date', 'cost', 'active', 'created_at', 'updated_at', 'deleted_at'
    ];
    static hidden =[];
    static casts ={
        id: 'int',
        cost: 'float',
        purchase_date: 'date',
        active: 'int',
        created_at: 'datetime',
        updated_at: 'datetime',
        deleted_at: 'datetime',
    }as any;

    category(){
        return this.belongsTo(AssetCategory, 'category_id', 'id');
    }

    
    constructor(attributes: any = {}){
        super({
            status: 'Active',
            active: 1,
            cost:0,
            ...attributes
        })
    }
};
export default Asset;