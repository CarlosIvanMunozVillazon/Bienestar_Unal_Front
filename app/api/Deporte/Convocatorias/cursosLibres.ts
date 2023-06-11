import { instance } from "../../base.api";

const endpoint : string = 'cursoslibres'

export const apiCursosLibres = {

    getCursosLibres : () => {
        return instance.get(`${endpoint}`);
    }
}