import { instance } from "../base.api";

const endpoint : string = 'login';

export const apiIngreso = {

    getAccess : (usuario : string, contrasenha : string) => {
        return instance.get(endpoint, {params : {
            user : usuario,
            password : contrasenha
        }})
    }
}