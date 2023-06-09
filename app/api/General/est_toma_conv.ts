import { instance } from "../base.api";

const endpoint : string = 'est_toma_conv'

export const apiEst_toma_conv = {
    post_est_toma_conv: function (usuario_id:number, convoc_id:number, date:string){
        return instance.post(`${endpoint}/${usuario_id}`, null, {params : {
            est_id: usuario_id,
            conv_id: convoc_id,
            fecha:  date
        }})
    }
}