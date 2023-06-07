import { instance } from "../../base.api";

const endpoint:string = 'falla_alimentacion'

export const fallaAlimentacion = {

    getFallaUserId : function (id : number) {
        return instance.get(`${endpoint}/${id}`)
    }
}