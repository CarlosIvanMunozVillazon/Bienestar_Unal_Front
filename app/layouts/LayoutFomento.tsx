"use client"

import React, { Children } from 'react'
import { Breadcrumbs, Button, Divider, Grid, IconButton, Link, Stack, Typography } from '@mui/material'
import { BasicNavbar } from '@/app/components/General/BasicNavbar';

type saludLayoutProps = {
    children: React.ReactNode
}


export default function LayoutFomento({ children }: saludLayoutProps) {

    //Money Secction layout
    return (
        <>
            <BasicNavbar backgroundColor='#E74C3C' pageName='Gestión & Fomento Socioeconómico'>
                <Typography variant="h6" fontWeight='bold' textAlign="center">Convocatorias</Typography>
                <Divider />

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/servicios/citasDisponibles'>
                        <Typography variant="body1" textAlign="center">Convocatorias disponibles</Typography>
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