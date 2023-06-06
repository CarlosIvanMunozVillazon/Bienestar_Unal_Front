import { instance } from "./base.api";


const endpoint : string = 'citas_medicas_disponibles'

export const citas = {

    getAll : function () {

        return instance.get(endpoint);
    }
}

// 30, 155, 171 //resultados de citas medicas

// 100, 32, 58 //citas medicas proximas

// 39, 132 //incapacidad