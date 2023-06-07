import { instance } from "../../base.api";

const endpoint : string = 'conv_fomento_emprendimiento'

export const cgfEmprendimiento = {
    cgfEmprendimientoTema : function (user_id : number , tema : string) {
        return instance.get(`${endpoint}/${user_id}/${tema}`)
    },
    cgfEmprendimientoNombre : function (user_id : number, nombre : string){
        return instance.get(`${endpoint}/${user_id}/${nombre}`)
    },
    cgfEmprendimientoId : function (user_id : number){
        return instance.get(`${endpoint}/${user_id}`)
    }
}