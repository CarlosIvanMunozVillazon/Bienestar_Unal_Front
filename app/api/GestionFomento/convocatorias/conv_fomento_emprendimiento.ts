import { instance } from "../../base.api";

const endpoint : string = 'conv_fomento_emprendimiento'

export const getCgfEmprendimiento = {
    getCgfEmprendimientoTema : function (user_id : number , tema : string) {
        return instance.get(`${endpoint}/${user_id}/${tema}`)
    },
    getCgfEmprendimientoNombre : function (user_id : number, nombre : string){
        return instance.get(`${endpoint}/${user_id}/${nombre}`)
    },
    getCgfEmprendimientoId : function (user_id : number){
        return instance.get(`${endpoint}/${user_id}`)
    }
}