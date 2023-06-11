import { instance } from "../../base.api";

const endpoint : string = 'torneosinternos'

export const apiTorneosInternos = {

    getTorneos : () => {
        return instance.get(`${endpoint}`);
    }
}