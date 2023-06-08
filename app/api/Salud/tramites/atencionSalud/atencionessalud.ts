import { instance } from "@/app/api/base.api";

const endpoint : string = 'atencionessalud'

export const apiAtencionesSalud = {

    getAtencionesSalud : function (user_id : number){
        return instance.get(`${endpoint}/${user_id}`)
    }
}