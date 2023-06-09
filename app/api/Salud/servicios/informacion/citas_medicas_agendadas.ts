import { instance } from "@/app/api/base.api";

const endpoint : string = 'citas_medicas_agendadas';

export const apiCitasAgendadas = {
    
    getCitasAgendadas : function (user_id : number){
        return instance.get(`${endpoint}/${user_id}`)
    }
}