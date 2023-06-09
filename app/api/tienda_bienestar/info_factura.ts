import { instance } from "../base.api";

const endpoint : string = 'info_factura'

export const apiInfoFactura = {
    getInfoFactura : function (user_id : number, store_id : number, bill_id : number){
        return instance.get(`${endpoint}/${user_id}`, {params : {
            tienda_id : store_id,
            factura_id : bill_id
        }})
    }
}