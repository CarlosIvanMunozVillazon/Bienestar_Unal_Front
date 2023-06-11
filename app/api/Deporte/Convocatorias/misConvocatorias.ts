import { instance } from "../../base.api";

const endpoint : string = 'convocatorias_usuario';

export const apiMisConvocatorias = {

    getMisConvocatorias : (idPersona : number) => {
        return instance.get(`${endpoint}`, {params : {
            cedula : idPersona
        }})
    }
}