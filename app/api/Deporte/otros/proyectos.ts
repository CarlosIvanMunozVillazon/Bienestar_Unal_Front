import { instance } from "../../base.api";

const endpoint : string = 'proyecto';

export const apiProyectos = {

    getProyectos : (idProyecto : number) => {
        return instance.get(endpoint, {params : {
            id_proy : idProyecto
        }})
    }
}