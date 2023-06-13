"use client"

import SearchIcon from '@mui/icons-material/Search';
import { BaseForm } from "@/app/components/General/BaseForm";
import LayoutTienda from "@/app/layouts/LayoutTienda";
import { Grid, Typography, Button, TextField } from "@mui/material";
import React from 'react';
import { form_eliminar_factura, form_info_factura, form_insertar_factura, form_insertar_producto_factura } from '@/app/types/tiendaBienestar/facturas/factura';
import { info_factura } from '../interface/info_factura.interface';
import { apiInfoFactura } from '@/app/api/tienda_bienestar/info_factura';
import { apiInsertar_factura } from '@/app/api/tienda_bienestar/insertar_factura';
import { apiInsertar_producto_factura } from '@/app/api/tienda_bienestar/insertar_producto_factura';
import { apiEliminar_factura } from '@/app/api/tienda_bienestar/eliminar_factura';
import { response } from '../../mainBienestar/interface/response.interface';


export default function InformacionFacturas() {
    const options_currency = { style: 'currency', currency: 'COP' };

    //Info Factura
    const [params_info_factura, set_params_info_factura] = React.useState<form_info_factura>(
        {
            usuario_id: 0,
            tienda_id: null,
            factura_id: null
        }
    );
    const [result_info_factura, set_result_info_factura] = React.useState<info_factura[] | null>(null);

    //Insertar Factura
    const [params_insertar_factura, set_params_insertar_factura] = React.useState<form_insertar_factura>(
        {
            usuario_id: 0,
            detalle: "N.A",
            tienda_id: 0
        }
    );
    const [result_insertar_factura, set_result_insertar_factura] = React.useState<response[] | null>(null);


    //Insertar Producto en Factura
    const [params_insertar_producto_factura, set_params_insertar_producto_factura] = React.useState<form_insertar_producto_factura>(
        {
            usuario_id: 0,
            factura_id: 1,
            producto_id: 1
        }
    );
    const [result_insertar_producto_factura, set_result_insertar_producto_factura] = React.useState<response[] | null>(null);


    //Eliminar Factura
    const [params_eliminar_factura, set_params_eliminar_factura] = React.useState<form_eliminar_factura>(
        {
            usuario_id: 0,
            mes: -1,
            ano: -1,
            factID: -1
        }
    );
    const [result_eliminar_factura, set_result_eliminar_factura] = React.useState<response[] | null>(null);

    //Guardado de datos de formularios
    const valueInfoFactura = (e: React.ChangeEvent<HTMLInputElement>) => {
        set_params_info_factura({
            ...params_info_factura, [e.target.name]: e.target.value
        })
    }

    //
    const valueInsertarFactura = (e: React.ChangeEvent<HTMLInputElement>) => {
        set_params_insertar_factura({
            ...params_insertar_factura, [e.target.name]: e.target.value
        })
    }

    //
    const valueInsertarProductoFactura = (e: React.ChangeEvent<HTMLInputElement>) => {
        set_params_insertar_producto_factura({
            ...params_insertar_producto_factura, [e.target.name]: e.target.value
        })
    }

    //
    const valueEliminarFactura = (e: React.ChangeEvent<HTMLInputElement>) => {
        set_params_eliminar_factura({
            ...params_eliminar_factura, [e.target.name]: e.target.value
        })
    }

    //Consumidores de API
    const handleGetInfoFactura = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        apiInfoFactura.getInfoFactura(params_info_factura.usuario_id, params_info_factura.tienda_id, params_info_factura.factura_id).then((response) => {
            set_result_info_factura(response.data)
            console.log(result_info_factura)
        }).catch((error) => {
            console.log(`${error}: No hay facturas`)
        })
        params_info_factura.tienda_id= null;
        params_info_factura.factura_id= null;
    }

    //
    const handle_insertar_factura = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        apiInsertar_factura.post_insertar_factura(params_insertar_factura.usuario_id, params_insertar_factura.detalle, params_insertar_factura.tienda_id).then((response) => {
            console.log("Factura ingresada correctamente")
            set_result_insertar_factura(response.data)
            console.log(result_insertar_factura)
        }).catch((error) => {
            console.log(`${error}: No se ingresó la factura`)
        })
    }


    //
    const handle_insertar_producto_factura = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        apiInsertar_producto_factura.post_insertar_producto_factura(params_insertar_producto_factura.usuario_id, params_insertar_producto_factura.factura_id, params_insertar_producto_factura.producto_id).then((response) => {
            console.log("Producto ingresado en la factura correctamente")
            set_result_insertar_producto_factura(response.data)
            console.log(result_insertar_producto_factura)
        }).catch((error) => {
            console.log(`${error}: No se ingresó el producto en la factura`)
        })
    }

    //
    const handle_eliminar_factura = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        apiEliminar_factura.delete_eliminar_factura(params_eliminar_factura.usuario_id, params_eliminar_factura.mes, params_eliminar_factura.ano, params_eliminar_factura.factID).then((response) => {
            console.log("Factura eliminada exitosamente")
            set_result_eliminar_factura(response.data)
            console.log(result_eliminar_factura)
        }).catch((error) => {
            console.log(`${error}: No se pudo eliminar la factura`)
        })
        params_eliminar_factura.mes = -1;
        params_eliminar_factura.ano = -1;
        params_eliminar_factura.factID = -1
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

                <Grid item sx={{ width: '75%' }}>
                    <BaseForm title='Información Facturas' children={
                        <>
                            <TextField name='usuario_id' onChange={valueInfoFactura} placeholder='Cédula' />
                            <TextField name='tienda_id' onChange={valueInfoFactura} placeholder='ID Tienda' />
                            <TextField name='factura_id' onChange={valueInfoFactura} placeholder='ID Factura' />
                        </>
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "white", bgcolor: "Green" }} endIcon={<SearchIcon />}>Consultar</Button>}

                        children3={<>
                            {result_info_factura !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                <Grid container
                                    component="div"
                                    justifyContent="center"
                                    alignItems="center"
                                    direction="row"
                                    spacing={1}
                                    sx={{ height: "100%", mt: 3 }}>

                                    <Grid item key={11111111} xs={1} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            ID
                                        </Typography>
                                    </Grid>

                                    <Grid item key={11111112} xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            FECHA
                                        </Typography>
                                    </Grid>

                                    <Grid item key={11111113} xs={1} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            HORA
                                        </Typography>
                                    </Grid>

                                    <Grid item key={11111114} xs={1} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            DETALLE
                                        </Typography>
                                    </Grid>

                                    <Grid item key={11111115} xs={1} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            ID PRODUCTO
                                        </Typography>
                                    </Grid>

                                    <Grid item key={11111116} xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            PRECIO PRODUCTO
                                        </Typography>
                                    </Grid>

                                    <Grid item key={11111117} xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            PRODUCTO
                                        </Typography>
                                    </Grid>

                                    <Grid item key={11111118} xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            TIENDA
                                        </Typography>
                                    </Grid>


                                    {
                                        result_info_factura.length == 0 ? <p>No se han encontrado facturas</p>

                                        : result_info_factura!.map((result) => (
                                            <>
                                                <Grid item key={result.Key} xs={1}>
                                                    {result.factID}
                                                </Grid>

                                                <Grid item key={result.Key+1} xs={2}>
                                                    {result.factFecha}
                                                </Grid>

                                                <Grid item key={result.Key+2} xs={1}>
                                                    {result.factHora}
                                                </Grid>

                                                <Grid item key={result.Key+3} xs={1}>
                                                    {result.factDetalle}
                                                </Grid>

                                                <Grid item key={result.Key+4} xs={1}>
                                                    {result.prodID==null ? 'null' : result.prodID}
                                                </Grid>

                                                <Grid item key={result.Key+5} xs={2}>
                                                    
                                                    {result.prodPrecio==null? 'null' : result.prodPrecio.toLocaleString('es-CO', options_currency)}
                                                </Grid>

                                                <Grid item key={result.Key+6} xs={2}>
                                                    {result.prodDetalle==null? 'null' : result.prodDetalle}
                                                </Grid>

                                                <Grid item key={result.Key+7} xs={2}>
                                                    {result.tieDireccion}
                                                </Grid>
                                            </>
                                        ))
                                    }
                                </Grid>

                            ) : <p>No se han encontrado facturas.</p>}
                        </>} submit={handleGetInfoFactura}
                    ></BaseForm>
                </Grid>

                <Grid item sx={{ width: '75%' }}>
                    <BaseForm title='Insertar Factura' children={
                        <>
                            <TextField name='usuario_id' onChange={valueInsertarFactura} placeholder='Cédula' />
                            <TextField name='detalle' onChange={valueInsertarFactura} placeholder='Detalle' />
                            <TextField name='tienda_id' onChange={valueInsertarFactura} placeholder='ID Tienda' />
                        </>
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "white", bgcolor: "Green" }} endIcon={<SearchIcon />}>Insertar</Button>}

                        children3={<>
                            {result_insertar_factura !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                    <Grid container
                                        component="div"
                                        justifyContent="center"
                                        alignItems="center"
                                        direction="row"
                                        spacing={1}
                                        sx={{ height: "100%" }}>

                                        {
                                            result_insertar_factura!.map((result) => (
                                                 <Grid item xs={3}>
                                                   {result.Answer}
                                                </Grid>
                                            ))
                                        }
                                    </Grid>

                                ) : <p>No se ha insertado factura</p>}
                        </>} submit={handle_insertar_factura}
                    ></BaseForm>
                </Grid>

                <Grid item sx={{ width: '75%' }} >
                    <BaseForm title='Insertar Producto en Factura' children={
                        <>
                            <TextField name='usuario_id' onChange={valueInsertarProductoFactura} placeholder='Cédula' />
                            <TextField name='factura_id' onChange={valueInsertarProductoFactura} placeholder='ID Factura' />
                            <TextField name='producto_id' onChange={valueInsertarProductoFactura} placeholder='ID Producto' />
                        </>
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "white", bgcolor: "Green" }} endIcon={<SearchIcon />}>Insertar</Button>}

                        children3={<>
                            {result_insertar_producto_factura !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                    <Grid container
                                        component="div"
                                        justifyContent="center"
                                        alignItems="center"
                                        direction="row"
                                        spacing={1}
                                        sx={{ height: "100%" }}>

                                        {
                                            result_insertar_producto_factura!.map((result) => (
                                               <Grid item xs={3}>
                                                    {result.Answer}
                                                </Grid>
                                            ))
                                        }
                                    </Grid>

                                ) : <p>No se ha insertado el producto en factura</p>}
                        </>} submit={handle_insertar_producto_factura}
                    ></BaseForm>
                </Grid>

                <Grid item sx={{ width: '75%' }} >
                    <BaseForm title='Eliminar Factura' children={
                        <>
                            <TextField name='usuario_id' onChange={valueEliminarFactura} placeholder='Cédula' />
                            <TextField name='mes' onChange={valueEliminarFactura} placeholder='Mes' />
                            <TextField name='ano' onChange={valueEliminarFactura} placeholder='Año' />
                            <TextField name='factID' onChange={valueEliminarFactura} placeholder='ID Factura' />
                        </>
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "white", bgcolor: "Green" }} endIcon={<SearchIcon />}>Eliminar</Button>}

                        children3={<>
                            {result_eliminar_factura !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                    <Grid container
                                        component="div"
                                        justifyContent="center"
                                        alignItems="center"
                                        direction="row"
                                        spacing={1}
                                        sx={{ height: "100%" }}>

                                        {
                                            result_eliminar_factura!.map((result) => (
                                                 <Grid item xs={3}>
                                                    {result.Answer}
                                                 </Grid>
                                            ))
                                        }
                                    </Grid>

                                ) : <p>No se ha eliminado la factura</p>}
                        </>} submit={handle_eliminar_factura}
                    ></BaseForm>
                </Grid>
            </Grid>
        </LayoutTienda>
    )
}