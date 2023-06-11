import { instance } from "../../base.api";

//Obtener los eventos y talleres por programa.
const endpoint : string = 'taller_evento_proyecto_deportes'

export const apiEveTaPrograma = {

    getEvetaPrograma : (programID : number) => {
        return instance.get(endpoint, {params : {
            id_programa : programID
        }})
    }
}