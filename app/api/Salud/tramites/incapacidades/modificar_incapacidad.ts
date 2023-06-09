import { instance } from "@/app/api/base.api";

const endpoint : string = 'modificar_incapacidad'

export const apiModificarIncapacidad = { //funciona

    putModificarIncapacidad : function (iD_incapacidad : number, date : string, sickness : string,
        days : number) {
            return instance.put(`${endpoint}`, null, {params : {
                incapacidad_id : iD_incapacidad,
                fecha : date,
                enfermedad : sickness,
                dias : days
            }})
        }
}