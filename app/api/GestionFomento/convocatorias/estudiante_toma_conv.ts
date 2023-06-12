import { instance } from "../../base.api";

const endpoint : string = 'est_toma_conv'

export const apiEstudianteTomaConv = {
    post_estudianteTomaConv : (est_id: number, conv_id:number, date:String) => {
        return instance.post(`${endpoint}/${est_id}`, {params: {
            est_id: est_id,
            conv_id: conv_id,
            fecha: date
        }})
    }
}