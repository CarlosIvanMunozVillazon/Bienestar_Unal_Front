export type form_info_factura= {
    usuario_id : number,
    tienda_id: number|null,
    factura_id: number|null
}

export type form_insertar_factura= {
    usuario_id : number,
    detalle: string,
    tienda_id: number
}

export type form_insertar_producto_factura= {
    usuario_id : number,
    factura_id: number,
    producto_id: number
}

export type form_eliminar_factura= {
    usuario_id : number,
    mes: number|null,
    ano: number|null
}