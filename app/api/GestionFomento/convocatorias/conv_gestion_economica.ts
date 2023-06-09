import { instance } from "../../base.api";

const endpoint : string = 'conv_gestion_economica';


export const apiCgfEconomica = {
    getByUserId : (user_id:number, filt_min : number, filt_max : number) => {
        return instance.get(`${endpoint}/${user_id}`, {params: {
            filter_min: filt_min,
            filter_max: filt_max
        }})
    }
}