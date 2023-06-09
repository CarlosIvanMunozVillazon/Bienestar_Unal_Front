"use client"

import SearchIcon from '@mui/icons-material/Search';
import { BaseForm } from "@/app/components/General/BaseForm";
import LayoutTienda from "@/app/layouts/LayoutTienda";
import { Grid, Typography, Button, TextField } from "@mui/material";
import { form_productos } from '@/app/types/tiendaBienestar/productos/form_productos';
import React from 'react';
import { apiProductosTienda } from '@/app/api/tienda_bienestar/productos_tienda';
import { productos_tienda } from '../interface/productos_tienda.interface';

export default function InformacionProductos() {

    const [tienda_id, set_tienda_id] = React.useState<form_productos>({
        tienda_id: 0
    });
    const [productos, set_productos] = React.useState<productos_tienda[] | null>(null);

    //Guardado de datos de formularios
    const valueTiendaID = (e: React.ChangeEvent<HTMLInputElement>) => {
        set_tienda_id({
            ...tienda_id, [e.target.name]:e.target.value
        })
    }

    //Consumidores de API
    const handleGetProducts = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        apiProductosTienda.getProductosTienda(tienda_id.tienda_id).then((response) => {
            set_productos(response.data)
            console.log(productos)
        }).catch((error) => {
            console.log(`${error}: No hay productos disponibles`)
        })
    }

    return (
        <LayoutTienda>
                <p>Productos</p>
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
                            <TextField name='tienda_id' onChange={valueTiendaID} placeholder='ID Tienda' />
                        }

                            children2={<Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Consultar</Button>}

                            children3={<>
                                {/*citasDisponibles !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                    <Grid container
                                        component="div"
                                        justifyContent="center"
                                        alignItems="center"
                                        direction="row"
                                        spacing={1}
                                        sx={{ height: "100%" }}>

                                        {
                                            // corActividades!.map(() => (
                                            //     <Grid item xs={3}>
                                            //     </Grid>
                                            // ))
                                        }
                                    </Grid>

                                ) : null*/}
                            </>} submit={handleGetProducts}
                        ></BaseForm>
                    </Grid>

                    <Grid item
                        sx={{ width: '75%' }}
                    >
                        <BaseForm title='Tienda de un Producto' children={
                            <TextField name='tienda_id' onChange={valueTiendaID} placeholder='ID Tienda' />
                        }

                            children2={<Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Consultar</Button>}

                            children3={<>
                                {/*citasDisponibles !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                    <Grid container
                                        component="div"
                                        justifyContent="center"
                                        alignItems="center"
                                        direction="row"
                                        spacing={1}
                                        sx={{ height: "100%" }}>

                                        {
                                            // corActividades!.map(() => (
                                            //     <Grid item xs={3}>
                                            //     </Grid>
                                            // ))
                                        }
                                    </Grid>

                                ) : null*/}
                            </>} submit={handleGetProducts}
                        ></BaseForm>
                    </Grid>
                </Grid>
    </LayoutTienda>
    )
}