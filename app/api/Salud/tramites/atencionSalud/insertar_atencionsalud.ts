import { instance } from "@/app/api/base.api";

const endpoint : string = 'insertar_atencionsalud';

export const apiInsertarAtencionSalud = { //lleva query params

    //Post function here.
    postInsertarAtencionSalud : function (user_id : number, date : string, kind : string) {
        return instance.post(`${endpoint}/${user_id}`, {
            fecha : date,
            tipo : kind
        })
    }   
}