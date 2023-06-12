import { instance } from "../../base.api";

const endpoint : string = 'conv_gestion_transporte'

export const apiCgfTransporte = {
    getcgfTransporte : (user_id: number, type : string|null) => {
        return instance.get(`${endpoint}/${user_id}`, {params: {
            tipo: type
        }})
    }
}