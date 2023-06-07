import { instance } from "../../base.api";

const endpoint : string = 'conv_gestion_alimentaria'

export const cgfAlimentaria = {
    getcgfAlimentariaMultiple : function (user_id:number, comida : string , lugar : string) {
        return instance.get(`${endpoint}/${user_id}/${comida}/${lugar}`)
    },
    getcgfAlimentariaId : function (user_id:number) {
        return instance.get(`${endpoint}/${user_id}`)
    }
}