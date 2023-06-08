import { instance } from "@/app/api/base.api";

const endpoint = 'modificar_atencionsalud'

export const apiModificarAtencionSalud = { //lleva query params

    //Put function here
    putModificarAtencionSalud : function (atencionsalud_id : number, date : string, kind : string) {
        return instance.put(`${endpoint}/${atencionsalud_id}`, null, {params : {
            fecha : date,
            tipo : kind
        }})
    }
}