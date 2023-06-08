import { instance } from "@/app/api/base.api";

const endpoint : string = 'resultado_cita_medica';

export const apiResultadoCitaMedica = {

    getResultadoId : function (user_id : number) {
        return instance.get(`${endpoint}/${user_id}`)
    }

}