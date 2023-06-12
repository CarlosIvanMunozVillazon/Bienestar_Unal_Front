import { instance } from "../../base.api";

const endpoint : string = 'conv_fomento_emprendimiento'

export const apiCgfEmprendimiento = {
    getCgfEmprendimiento : function (name : string|null, topic : string|null){
        return instance.get(`${endpoint}`, {params : {
            nombre : name,
            tema : topic
        }})
    }
    
}