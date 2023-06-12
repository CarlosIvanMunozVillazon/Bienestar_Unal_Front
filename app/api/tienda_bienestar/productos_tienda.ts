import { instance } from "../base.api";

const endpoint : string = '/productos_tienda'

export const apiProductosTienda = {
    getProductosTienda : function (store_id : number|null, name: string){
        return instance.get(`${endpoint}/`, {params : {
            tienda_id : store_id,
            nombre : name
        }})
    }
}