import { instance } from "../base.api";

const endpoint : string = 'programa_area_convocatoria'

export const apiPrograma_area_convocatoria = {
    get_programa_area_convocatoria: function (convoc_id:number){
        return instance.get(`${endpoint}`, {params : {
            id_conv: convoc_id
        }})
    }
}