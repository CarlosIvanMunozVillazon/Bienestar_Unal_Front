import { instance } from "@/app/api/base.api";

const endpoint : string = 'select_perfilriesgo';

export const apiPerfilDeRiesgo = {

    getPerfilDeRiesgo : function (user_id : number) {
        return instance.get(`${endpoint}/${user_id}`)
    }
}