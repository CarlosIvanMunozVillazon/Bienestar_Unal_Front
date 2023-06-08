export type formInsertarAtencionSalud = {

    user_id : number,
    fecha : string,
    tipo : string

}

export type formModificarAtencionSalud = {

    atencionsalud_id : number,
    fecha : string,
    tipo : string
}

//el tipo para consultar atenciones en salud está en la carpeta servicios/informacion