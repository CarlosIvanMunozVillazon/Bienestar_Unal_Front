import { instance } from "../../base.api";

const endpoint : string = 'actividad_corresponsabilidad';

export const apiActividadCorresponsabilidad = {
    getActividadPersona : function( user_id:number) {
        return instance.get(`${endpoint}/${user_id}`);
    }

}