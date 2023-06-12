export type convFomentoEmprendimiento = {
    nombre : string|null,
    tema : string|null
}

export type convAlimentaria = {
    cedula : number,
    comida : string|null,
    lugar : string|null
}


export type convAlojamiento = {
    cedula : number,
    localidad : string|null,
    tipo : string|null
}

export type convEconomica = {
    cedula : number,
    filter_min : number|null,
    filter_max : number|null
}

export type convTransporte = {
    cedula : number,
    tipo : string|null
}

export type est_toma_conv = {
    cedula : number,
    conv_id: number,
    fecha: string
}