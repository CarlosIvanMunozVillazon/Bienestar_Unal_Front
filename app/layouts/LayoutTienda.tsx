"use client"

import React, { Children } from 'react'
import { Breadcrumbs, Button, Divider, Grid, IconButton, Link, Stack, Typography } from '@mui/material'
import { BasicNavbar } from '@/app/components/General/BasicNavbar';

type deporteLayoutProps = {
    children: React.ReactNode
}


export default function LayoutTienda({ children }: deporteLayoutProps) {

    //Sports secction layout
    return (
        <>
            <BasicNavbar backgroundColor='green' pageName='Tienda Bienestar Universitario'>

                <Typography variant="h6" fontWeight='bold' textAlign="center">Productos y Facturas</Typography>
                <Divider />

                <IconButton>
                    <Link underline='hover' color='GrayText' href='\pages\tiendaBienestar\Productos'>
                        <Typography variant="body1" textAlign="center">Productos</Typography>
                    </Link>
                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='\pages\tiendaBienestar\Facturas'>
                        <Typography variant="body1" textAlign="center">Facturas</Typography>
                    </Link>
                </IconButton>
            </BasicNavbar>

            <Grid
                container
                component="div"
                alignItems="center"
                justifyContent="center"
                direction="column"
                sx={{ width: "100%", mt: 1 }}
                spacing={2}
                maxHeight="xl"
            >

                <Grid item>


                    <Stack direction="row"
                        justifyContent="left"
                        alignItems="left"
                        spacing={8}
                    >
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="text.primary" href="/pages/actividadFisica">
                                Actividad Física & Deporte
                            </Link>
                            <Link
                                underline="hover"
                                color="text.primary"
                                href="/pages/gestionYFomento"
                            >
                                Gestión & Fomento Socioeconómico
                            </Link>
                            <Link
                                underline="hover"
                                color="text.primary"
                                href="/pages/salud"
                            >
                                Salud
                            </Link>
                            <Link
                                underline="hover"
                                color="text.primary"
                                href="/pages/tiendaBienestar"
                            >
                                Tienda de Bienestar UN
                            </Link>
                        </Breadcrumbs>

                    </Stack>
                </Grid>

            </Grid>

            {children}


        </>
    )
}