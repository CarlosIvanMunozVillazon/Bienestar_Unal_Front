import { instance } from "../../base.api";

const endpoint : string = 'participar_convocatoria';

export const apiParticiparConvocatoria = {

    postParticiparConvocatoria : (cedul : number, idConv : number, date : string) => {
        return instance.post(`${endpoint}`, null, {params : {

            cedula : cedul,
            id_conv : idConv,
            fecha_inscripcion : date
        }})
    }
}