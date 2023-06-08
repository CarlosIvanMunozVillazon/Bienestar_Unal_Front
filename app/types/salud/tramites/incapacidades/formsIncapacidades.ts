export type formInsertarIncapacidad = {

    cedula : number,
    fecha : string,
    enfermedad : string,
    dias : number
}

export type formModificarIncapacidad = {

    IdIncapacidad : number,
    fecha : string,
    enfermedad : string,
    dias : number
}

//el tipo para consular información de incapacidades se encuentra en servicios / informacion