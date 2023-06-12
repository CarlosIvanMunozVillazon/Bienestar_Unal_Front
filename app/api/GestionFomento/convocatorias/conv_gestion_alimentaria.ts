import { formatDiagnostic } from "typescript";
import { instance } from "../../base.api";

const endpoint : string = 'conv_gestion_alimentaria'

export const apiCgfAlimentaria = {
    getCgfAlimentaria : function (user_id:number, food : string|null , place : string|null) {
        return instance.get(`${endpoint}/${user_id}`,{params : {
            comida : food,
            lugar: place
        }})
    }
}