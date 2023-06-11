import { instance } from "../../base.api";

const endpoint : string = 'convocatorias_usuario';

export const apiMisConvocatorias = {

    getMisConvocatorias : (id : number) => {
        return instance.get(`${endpoint}`, {params : {
            cedula : id
        }})
    }
}