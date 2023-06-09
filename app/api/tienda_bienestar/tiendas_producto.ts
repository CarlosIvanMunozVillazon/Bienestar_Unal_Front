import { instance } from "../base.api";

const endpoint : string = 'tiendas_producto'

export const apiTiendasProducto = {
    getTiendasProducto : function (product_id : number){
        return instance.get(`${endpoint}`, {params : {
            producto_id  : product_id,
        }})
    }
}