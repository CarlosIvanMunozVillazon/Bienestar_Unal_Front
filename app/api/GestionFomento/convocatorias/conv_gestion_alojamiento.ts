import { instance } from "../../base.api";

const endpoint : string = 'conv_gestion_alojamiento'

export const apiCgfAlojamiento = {
    getByUserId : (user_id : number , neighbhour : string, type : string) => {
        return instance.get(`${endpoint}/${user_id}`, {params: {
            localidad: neighbhour,
            tipo: type
        }})
    }
}