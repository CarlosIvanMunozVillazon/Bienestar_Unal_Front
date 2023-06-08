import { instance } from "@/app/api/base.api";

const endpoint : string = 'agendar_cita_medica'

export const apiAgendarCitaMedica = {

    //Put function here
    putAgendarCita : function (user_id : number, date : string, speciality : string){
        return instance.put(`${endpoint}/${user_id}`, null, {params : {
            fecha : date,
            especialidad : speciality
        }})
    }
}