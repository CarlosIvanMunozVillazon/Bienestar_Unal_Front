"use client"

import React, { Children } from 'react'
import { Breadcrumbs, Button, Divider, Grid, IconButton, Link, Stack, Typography } from '@mui/material'
import { BasicNavbar } from '@/app/components/General/BasicNavbar';

type saludLayoutProps = {
    children: React.ReactNode
}


export default function LayoutFomento({ children }: saludLayoutProps) {

    //Money Section layout
    return (
        <>
            <BasicNavbar backgroundColor='#E74C3C' pageName='Gestión & Fomento Socioeconómico'>
                <Typography variant="h6" fontWeight='bold' textAlign="center">Servicios</Typography>
                <Divider />

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/gestionYFomento/convocatorias'>
                        <Typography variant="body1" textAlign="center">Convocatorias</Typography>
                    </Link>
                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/gestionYFomento/corresponsabilidad'>
                        <Typography variant="body1" textAlign="center">Corresponsabilidad</Typography>
                    </Link>
                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/gestionYFomento/otros'>
                        <Typography variant="body1" textAlign="center">Otros</Typography>
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

{/*




# 9. CHECK DE CONVOCATORIA ????? esto no debe funcionar a bajo nivel? No implementar
    Si el estudiante inserta una conv. en est_toma_conv, verificar que no ingrese
#dos veces la misma en el mismo semestre
	sp_insertar_est_tm_conv_est(in id_est int, in id_conv int, in fecha DATE)

# 11. DETALLE DE CONVOCATORIA ¿Cómo lo implemento? ¿Es necesario? No implementar
un estudiante ya conoce la convocatoria como ya está en la página.
    El estudiante/secretario quiere conocer el programa y área de una convocatoria
	programa_area_convocatoria(in id_conv int)

*/}