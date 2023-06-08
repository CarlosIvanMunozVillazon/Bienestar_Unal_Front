import { instance } from "../../../base.api";


const endpoint : string = 'citas_medicas_disponibles'

export const apiCitasDisponibles = {

    getCitasDisponibles : function () {
        return instance.get(`${endpoint}`);
    }
}
