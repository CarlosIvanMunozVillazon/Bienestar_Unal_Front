import { instance } from "../../base.api";

const endpoint : string = 'conv_gestion_alojamiento'

export const cgfAlojamiento = {

    getByLocalidadTipo : (user_id : number , localidad : string, tipo : string) => {
        return instance.get(`${endpoint}/${user_id}/${localidad}/${tipo}`)
    },

    getByLocalidad : (user_id : number , localidad : string) => {
        return instance.get(`${endpoint}/${user_id}/${localidad}`)
    },

    getById : (user_id : number) => {
        return instance.get(`${endpoint}/${user_id}`)
    },



}