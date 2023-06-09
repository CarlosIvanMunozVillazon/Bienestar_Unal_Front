import { instance } from "@/app/api/base.api";

const endpoint : string = 'insertar_incapacidad';

export const apiInsertarIncapacidad = {

    postInsertarIncapacidad : function (user_id : number, date : string, sickness : string , days : number) {
        return instance.post(`${user_id}`,{
            fecha : date,
            enfermedad : sickness,
            dias : days
        })
    }
}