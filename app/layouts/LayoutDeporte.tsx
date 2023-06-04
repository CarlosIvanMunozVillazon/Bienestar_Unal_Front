"use client"

import React, { Children } from 'react'
import { Breadcrumbs, Button, Divider, Grid, IconButton, Link, Stack, Typography } from '@mui/material'
import { BasicNavbar } from '@/app/components/General/BasicNavbar';

type deporteLayoutProps = {
    children: React.ReactNode
}


export default function LayoutDeporte({ children }: deporteLayoutProps) {

    //Sports secction layout
    return (
        <>
            <BasicNavbar backgroundColor='orange' pageName='Actividad Física & Deporte'>
                
                <Typography variant="h6" fontWeight='bold' textAlign="center">Deporte</Typography>
                <Divider />

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/servicios/citasDisponibles'>
                        <Typography variant="body1" textAlign="center">Still working on it</Typography>
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
                        </Breadcrumbs>

                    </Stack>
                </Grid>

            </Grid>

            {children}


        </>
    )
}