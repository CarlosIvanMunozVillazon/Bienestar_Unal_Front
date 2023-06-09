import { instance } from "../../base.api";

const endpoint : string = 'insertar_actividad_corresponsabilidad'

export const apiInsertar_actividad_corresponsabilidad = {
    post_insertar_actividad_corresponsabilidad: function (user_id:number, activity: string, hours : number){
        return instance.post(`${endpoint}/${user_id}`, null, {params : {
            actividad : activity,
            horas: hours
        }})
    }
}