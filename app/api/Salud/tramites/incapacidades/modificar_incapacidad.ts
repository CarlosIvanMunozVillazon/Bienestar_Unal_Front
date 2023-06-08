import { instance } from "@/app/api/base.api";

const endpoint : string = 'modificar_incapacidad'

export const apiModificarIncapacidad = { //lleva query params

    //Put function here
    putModificarIncapacidad : function (incapacidad_id : number, date : string, sickness : string,
        days : number) {
            return instance.put(`${endpoint}/${incapacidad_id}`, null, {params : {
                fecha : date,
                enfermedad : sickness,
                dias : days
            }})
        }
}