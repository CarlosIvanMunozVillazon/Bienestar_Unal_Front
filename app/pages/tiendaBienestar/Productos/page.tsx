"use client"

import SearchIcon from '@mui/icons-material/Search';
import { BaseForm } from "@/app/components/General/BaseForm";
import LayoutTienda from "@/app/layouts/LayoutTienda";
import { Grid, Typography, Button, TextField } from "@mui/material";
import { form_productos, form_tienda } from '@/app/types/tiendaBienestar/productos/form_productos';
import React from 'react';
import { apiProductosTienda } from '@/app/api/tienda_bienestar/productos_tienda';
import { productos_tienda } from '../interface/productos_tienda.interface';
import { tiendas_producto } from '../interface/tiendas_producto.interface';
import { apiTiendasProducto } from '@/app/api/tienda_bienestar/tiendas_producto';

export default function InformacionProductos() {
    const options_currency1 = { style: 'currency', currency: 'COP' };

    //Productos de una tienda
    const [tienda_id, set_tienda_id] = React.useState<form_productos>({
        tienda_id: -1,
        nombre: ''
    });
    const [productos, set_productos] = React.useState<productos_tienda[] | null>(null);

    //Tiendas de un producto
    const [producto_id, set_producto_id] = React.useState<form_tienda>({
        producto_id: 1
    });
    const [tiendas, set_tiendas] = React.useState<tiendas_producto[] | null>(null);

    //Guardado de datos de formularios
    const valueTiendaID = (e: React.ChangeEvent<HTMLInputElement>) => {
        set_tienda_id({
            ...tienda_id, [e.target.name]:e.target.value
        })
    }

    const valueProductoID = (e: React.ChangeEvent<HTMLInputElement>) => {
        set_producto_id({
            ...producto_id, [e.target.name]:e.target.value
        })
    }

    //Consumidores de API
    const handleGetProducts = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        apiProductosTienda.getProductosTienda(tienda_id.tienda_id, tienda_id.nombre).then((response) => {
            set_productos(response.data)
            console.log(productos)
        }).catch((error) => {
            console.log(`${error}: No hay productos disponibles`)
        })
        tienda_id.tienda_id = null;
    }

    const handleGetStores = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        apiTiendasProducto.getTiendasProducto(producto_id.producto_id).then((response) => {
            set_tiendas(response.data)
            console.log(tiendas)
        }).catch((error) => {
            console.log(`${error}: No hay tiendas asociadas`)
        })
    }

    return (
        <LayoutTienda>
                <br />
                <Grid container
                    component='main'
                    alignItems='center'
                    justifyContent='center'
                    direction='column'
                    spacing={5}
                    sx={{ width: '100%' }}>

                    <Grid item
                        sx={{ width: '75%' }}
                    >
                        <BaseForm title='Productos Disponibles' children={
                            <>
                                <TextField name='tienda_id' onChange={valueTiendaID} placeholder='ID Tienda' />
                                <TextField name='nombre' onChange={valueTiendaID} placeholder='Nombre' />
                            </>
                        }

                            children2={<Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Green" }} endIcon={<SearchIcon />}>Consultar</Button>}

                            children3={<>
                                {productos !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                <Grid container
                                    component="div"
                                    justifyContent="center"
                                    alignItems="center"
                                    direction="row"
                                    spacing={1}
                                    sx={{ height: "100%", mt: 3 }}>


                                    <Grid item key={11111111} xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            ID PRODUCTO
                                        </Typography>
                                    </Grid>

                                    <Grid item key={11111112} xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            PRECIO
                                        </Typography>
                                    </Grid>

                                    <Grid item key={11111113} xs={3} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            DETALLE
                                        </Typography>
                                    </Grid>

                                    <Grid item key={11111114} xs={1} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            ID TIENDA
                                        </Typography>
                                    </Grid>

                                    <Grid item key={11111115} xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            DIRECCIÓN
                                        </Typography>
                                    </Grid>

                                    <Grid item key={11111116} xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            CIUDAD
                                        </Typography>
                                    </Grid>

                                    {
                                        productos.length == 0 ? <p>No se han encontrado productos</p>

                                        : productos!.map((result) => (
                                            <>
                                                <Grid item key={result.Key} xs={2}>
                                                    {result.prodID}
                                                </Grid>

                                                <Grid item key={result.Key+1} xs={2}>
                                                    {result.prodPrecio.toLocaleString('es-CO', options_currency1)}
                                                </Grid>

                                                <Grid item key={result.Key+2} xs={3}>
                                                    {result.prodDetalle}
                                                </Grid>

                                                <Grid item key={result.Key+3} xs={1}>
                                                    {result.tieID}
                                                </Grid>

                                                <Grid item key={result.Key+4} xs={2}>
                                                    {result.tieDireccion}
                                                </Grid>

                                                <Grid item key={result.Key+5} xs={2}>
                                                    {result.tieCiudad}
                                                </Grid>
                                            </>
                                        ))
                                    }
                                </Grid>

                                ) : <p>No se han encontrado productos.</p>}
                            </>} submit={handleGetProducts}
                        ></BaseForm>
                    </Grid>

                    <Grid item
                        sx={{ width: '75%' }}
                    >
                        <BaseForm title='Tiendas de un Producto' children={
                            <TextField name='producto_id' onChange={valueProductoID} placeholder='ID Producto' />
                        }

                            children2={<Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Green" }} endIcon={<SearchIcon />}>Consultar</Button>}

                            children3={<>
                                {tiendas !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                    <Grid container
                                        component="div"
                                        justifyContent="center"
                                        alignItems="center"
                                        direction="row"
                                        spacing={1}
                                        sx={{ height: "100%", mt: 3  }}>

                                    <Grid item key={11111111} xs={4} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            ID Tienda
                                        </Typography>
                                    </Grid>

                                    <Grid item key={11111112} xs={4} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            DIRECCIÓN
                                        </Typography>
                                    </Grid>

                                    <Grid item key={11111113} xs={4} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            CIUDAD
                                        </Typography>
                                    </Grid>

                                    {
                                        tiendas.length == 0 ? <p>No se han encontrado tiendas</p>

                                        : tiendas!.map((result) => (
                                            <>
                                                <Grid item key={result.Key} xs={4}>
                                                    {result.tieID}
                                                </Grid>

                                                <Grid item key={result.Key+1} xs={4}>
                                                    {result.tieDireccion}
                                                </Grid>

                                                <Grid item key={result.Key+2} xs={4}>
                                                    {result.tieCiudad}
                                                </Grid>
                                            </>
                                        ))
                                    }
                                    </Grid>

                                ) : <p>No se han encontrado tiendas.</p>}
                            </>} submit={handleGetStores}
                        ></BaseForm>
                    </Grid>
                </Grid>
    </LayoutTienda>
    )
}