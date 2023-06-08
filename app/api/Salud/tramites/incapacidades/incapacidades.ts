import { instance } from "@/app/api/base.api";

const endpoint : string = 'incapacidades';

export const apiIncapacidades = {

    getIncapacidades : function (user_id : number){
        return instance.get(`${endpoint}/${user_id}`);
    }
}