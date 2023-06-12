"use client"

import React from 'react'
import { Breadcrumbs, Divider, Grid, IconButton, Link, Stack, Typography } from '@mui/material'
import { BasicNavbar } from '@/app/components/General/BasicNavbar';

type deporteLayoutProps = {
    children: React.ReactNode
}


export default function LayoutMain({ children }: deporteLayoutProps) {

    //Sports secction layout
    return (
        <>
            <BasicNavbar backgroundColor='Purple' pageName='Bienvenido !'>
                
               <Typography variant="h6" fontWeight='bold' textAlign="center">Áreas</Typography>
                <Divider />

                <IconButton>
                    <Link underline='hover' color='GrayText' href='\pages\actividadFisica'>
                        <Typography variant="body1" textAlign="center">Actividad Física y Deporte</Typography>
                    </Link>
                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='\pages\gestionYFomento'>
                        <Typography variant="body1" textAlign="center">Gestión y Fomento Socioeconómico</Typography>
                    </Link>
                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='\pages\salud'>
                        <Typography variant="body1" textAlign="center">Salud</Typography>
                    </Link>
                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='\pages\tiendaBienestar'>
                        <Typography variant="body1" textAlign="center">Tienda Bienestar UN</Typography>
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
                            </Link>s
                        </Breadcrumbs>

                    </Stack>
                </Grid>

            </Grid>

            {children}


        </>
    )
}