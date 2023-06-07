import { instance } from "../../base.api";

const endpoint : string = 'conv_gestion_economica';
const GREATER_THAN : string = 'mayor_igual';
const LESS :string = 'menor';

export const cgfEconomica = {
    getByUserId : (user_id:number) => {
        return instance.get(`${endpoint}/${user_id}`)
    },

    getGreaterThan : (user_id:number, filter : number) => {
        return instance.get(`${endpoint}/${user_id}/${GREATER_THAN}/${filter}`)
    },

    getSmallest : (user_id:number, filter : number) => {
        return instance.get(`${endpoint}/${user_id}/${LESS}/${filter}`)
    }
}