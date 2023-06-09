import { instance } from "../base.api";

const endpoint : string = 'insertar_producto_factura'

export const apiInsertar_producto_factura = {
    post_insertar_producto_factura: function (usuario_id:number, bill_ID:number, product_ID:number){
        return instance.post(`${endpoint}/${usuario_id}`, {params : {
            user_id: usuario_id,
            factura_ID: bill_ID,
            producto_ID:  product_ID
        }})
    }
}