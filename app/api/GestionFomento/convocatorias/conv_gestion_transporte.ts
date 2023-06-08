import { instance } from "../../base.api";

const endpoint : string = 'conv_gestion_transporte'

export const getCgfTransporte = {
    getcgfTransporteTipo : (user_id: number, tipo : string) => {
        return instance.get(`${endpoint}/${user_id}/${tipo}`)
    },

    getcgfTransporte : (user_id : number) => {
        return instance.get(`${endpoint}/${user_id}`)
    }
}