import { instance } from "@/app/api/base.api";

const endpoint : string = 'cancelar_cita_medica'

export const apiCancelarCitaMedica = {

    //Put funciton here.
    putCancelarCita : function (user_id : number, date : string, speciality : string){
        return instance.put(`${endpoint}/${user_id}`, null, {params : {
            fecha : date,
            especialidad : speciality
        }}) //within this url we should point the object we want to update
    }
}

