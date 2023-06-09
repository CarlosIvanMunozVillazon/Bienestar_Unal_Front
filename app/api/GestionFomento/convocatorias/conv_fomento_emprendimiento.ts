import { instance } from "../../base.api";

const endpoint : string = 'conv_fomento_emprendimiento'

export const apiCgfEmprendimiento = {
    getCgfEmprendimiento : function (user_id : number, name : string, topic : string){
        return instance.get(`${endpoint}/${user_id}`, {params : {
            nombre : name,
            tema : topic
        }})
    }
    
}