import { instance } from "../base.api";

const endpoint : string = 'insertar_factura'

export const apiInsertar_factura = {
    post_insertar_factura: function (user_id:number, detail: string, store_id : number){
        return instance.post(`${endpoint}`,null, {params : {
            cliente_ID: user_id,
            detalle: detail,
            tienda_ID: store_id
        }})
    }
}