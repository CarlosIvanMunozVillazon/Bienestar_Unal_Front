"use client"
import BasicLayout from '@/app/layouts/BasicLayout'
import { Button,Grid, Stack, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

import RestaurantIcon from '@mui/icons-material/Restaurant';
import PaidIcon from '@mui/icons-material/Paid';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import WorkIcon from '@mui/icons-material/Work';
import LayoutFomento from '@/app/layouts/LayoutFomento';

export default function TiendaBienestar() {
    return (
        <LayoutFomento>
            <p>Página tienda bienestar; aún por implementar.</p>
        </LayoutFomento>
    )
}
// #6. Una persona/estudiante/secretario/director quiere consultar sus facturas con los detalles en la Tienda de bienestar U
// 	sp_info_factura_per(in id_per int, in id_tienda int)

// #7. Una persona quiere consultar los productos en una tienda de bienestar U.
// 	sp_productos_tienda(in id_tienda int)

// # 8. Una persona queire conocer las tiendas donde se encuentra un producto
// 	sp_tiendas_ofrece_producto(in id_prod int)