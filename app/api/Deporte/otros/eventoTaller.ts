import { instance } from "../../base.api";

const endpoint : string = 'taller'

export const apiEventoTaller = {

    getEventoTaller : (idEventoTaller : number) => {
        return instance.get(`${endpoint}` , {params : {
            id_eve_ta : idEventoTaller
        }})
    }
}