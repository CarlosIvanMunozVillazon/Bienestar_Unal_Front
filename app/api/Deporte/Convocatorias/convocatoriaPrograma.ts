import { instance } from "../../base.api";

const endpoint : string = 'convocatorias_deporte'

export const apiConvsDeporte = {

    getConvPrograma : (idPrograma : number) => {
        return instance.get(`${endpoint}`, {params : {
            id_programa : idPrograma
        }})
    }
}