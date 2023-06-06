"use client"

import React, { Children } from 'react'
import { Breadcrumbs, Button, Divider, Grid, IconButton, Link, Stack, Typography } from '@mui/material'
import { BasicNavbar } from '@/app/components/General/BasicNavbar';

type saludLayoutProps = {
    children: React.ReactNode
}


export default function LayoutSalud({ children }: saludLayoutProps) {

    //Health Secction layout
    return (
        <>
            <BasicNavbar backgroundColor='Teal' pageName='Salud'>
                
                <Typography variant="h6" fontWeight='bold' textAlign="center">Citas</Typography>
                <Divider />

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/servicios/informacion'>
                        <Typography variant="body1" textAlign="center">Información</Typography>
                    </Link>
                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/servicios/gestion'>
                        <Typography variant="body1" textAlign="center">Gestionar Citas</Typography>
                    </Link>
                </IconButton>


                <Typography variant="h6" fontWeight='bold' textAlign="center">Trámites</Typography>
                <Divider />

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/tramites/atencionSalud'>
                        <Typography variant="body1" textAlign="center">Atención en Salud</Typography>
                    </Link>
                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/tramites/incapacidades'>
                        <Typography variant="body1" textAlign="center">Incapacidades</Typography>
                    </Link>
                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/tramites/miPerfildeRiesgo'>
                        <Typography variant="body1" textAlign="center">Mi pérfil de riesgo</Typography>
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

{/**


<IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/tramites/anhadirIncapacidad'>
                        <Typography variant="body1" textAlign="center">Agregar Incapacidad</Typography>
                    </Link>
                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/tramites/anhadirAtencionSalud'>
                        <Typography variant="body1" textAlign="center">Agregar Atención Salud</Typography>
                    </Link>
                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/tramites/estadoAtencionSalud'>
                        <Typography variant="body1" textAlign="center">Estado de Atenciones</Typography>
                    </Link>

                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/tramites/modificarAtenciones'>
                        <Typography variant="body1" textAlign="center">Modificar Atenciones</Typography>
                    </Link>

                </IconButton>


*/}