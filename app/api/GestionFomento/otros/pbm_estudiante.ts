import { instance } from "../../base.api";

const endpoint : string = 'pbm_estudiante'

export const apiPbmEstudiante = {
    getPbmEstudiante : function (user_id : number) {
        return instance.get(`${endpoint}/${user_id}`)
    }
}