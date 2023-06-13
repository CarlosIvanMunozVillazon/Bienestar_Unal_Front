import { instance } from "../base.api";

const endpoint : string = 'eliminar_factura'

export const apiEliminar_factura = {
    delete_eliminar_factura: function (usuario_id:number, month:number|null, year:number|null, bill:number|null){
        return instance.delete(`${endpoint}/${usuario_id}`, {params : {
            user_id: usuario_id,
            mes: month,
            ano:  year,
            factID: bill
        }})
    }
}