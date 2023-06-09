import { instance } from "@/app/api/base.api";

const endpoint = 'modificar_atencionsalud'

export const apiModificarAtencionSalud = {

    putModificarAtencionSalud : function (saludatencion_id : number, date : string, kind : string) {
        return instance.put(`${endpoint}/`, null, {params : {
            atencionsalud_id : saludatencion_id,
            fecha : date,
            tipo : kind
        }})
    }
}