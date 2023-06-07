import { instance } from "../../base.api";

const endpoint : string = 'horas_corresponsabilidad'

export const horasCorresponsabilidad = {
    getHorasUser : function (user_id : number) {
        return instance.get(`${endpoint}/${user_id}`)
    }
}