"use client"
import BasicLayout from '@/app/layouts/BasicLayout'
import { Breadcrumbs, Button, Divider, Grid, IconButton, Link, Stack, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'


import HealingIcon from '@mui/icons-material/Healing';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { BasicNavbar } from '@/app/components/General/BasicNavbar';

export default function Salud() {

    //Service options rendering
    // const [serviceDisplay , setServiceDisplay] = React.useState<boolean>(false);

    // const serviceDisplayToggle = () => {
    //     setServiceDisplay(!serviceDisplay);
    // }

    // //Procedure options rendering
    // const [procedureDisplay , setProcedureDisplay] = React.useState<boolean>(false);

    // const procedureDisplayToggle = () => {
    //     setProcedureDisplay(!procedureDisplay);
    // }
    return (
        <>
            <BasicNavbar backgroundColor='Teal' pageName='Salud'>
                {/*Menu elements within the toggle drawer.*/}
                <Typography variant="h6" fontWeight='bold' textAlign="center">Servicios</Typography>
                <Divider />

                <IconButton>
                    <Typography variant="body1" textAlign="center">Citas disponibles</Typography>
                </IconButton>

                <IconButton>
                    <Typography variant="body1" textAlign="center">Mis citas</Typography>
                </IconButton>

                <IconButton>
                    <Typography variant="body1" textAlign="center">Cancelar cita</Typography>
                </IconButton>

                <IconButton>
                    <Typography variant="body1" textAlign="center">Agendar cita</Typography>
                </IconButton>

                <IconButton>
                    <Typography variant="body1" textAlign="center">Resultados de citas</Typography>
                </IconButton>
                <Typography variant="h6" fontWeight='bold' textAlign="center">Trámites</Typography>
                <Divider />

                <IconButton>
                    <Typography variant="body1" textAlign="center">Estado de Incapacidad</Typography>
                </IconButton>

                <IconButton>
                    <Typography variant="body1" textAlign="center">Modificar Incapacidad</Typography>
                </IconButton>

                <IconButton>
                    <Typography variant="body1" textAlign="center">Estado de Atenciones</Typography>
                </IconButton>

                <IconButton>
                    <Typography variant="body1" textAlign="center">Modificar Atenciones</Typography>
                </IconButton>

                <IconButton>
                    <Typography variant="body1" textAlign="center">Mi pérfil de riesgo</Typography>
                </IconButton>

            </BasicNavbar>

            <Grid
                container
                component="main"
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



                {/*Here should start the table visualization */}

            </Grid >


        </>
    )
}
//Table visualization:
{/* <Grid item sx={{ width: "90%", mt: 1.8, mb: 2 }}>
                        <Grid
                            container
                            component="div"
                            alignItems="center"
                            justifyContent="center"
                            direction="row"
                            sx={{ width: "100%" }}
                            spacing={2}
                            border="1px solid gray"
                        >

                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    CÓDIGO DE CITA
                                </Typography>
                            </Grid>

                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }} >
                                <Typography variant='body1'>
                                    DOCTOR
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}>
                                <Typography variant='body1'>
                                    DIAGNÓSTICO
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    ESPECIALIDAD
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    FECHA
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    CÉDULA DE CIUDADANÍA
                                </Typography>
                            </Grid>

                        </Grid>

                    </Grid> */}


//Register example
{/*                            <Grid item xs={2}>
                                código cita
                            </Grid>


                            <Grid item xs={2}>
                                cc.doctor
                            </Grid>

                            <Grid item xs={2}>
                                diagnóstico
                            </Grid>

                            <Grid item xs={2}>
                                especialidad
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                cc.estudiante
                            </Grid>

 */}
//Weird buttons
{/* <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<HealingIcon />} >

                            <Typography variant="body1">
                                Servicios
                            </Typography>

                        </Button>

                        <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<AccountCircleIcon />} >

                            <Typography variant="body1">
                                Trámites
                            </Typography>

                        </Button> */}

//Weird rendering

{/* {
                    serviceDisplay ? <Grid item>


                        <Stack direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={8}
                        >
                            <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>

                                <Typography variant="body1">
                                    Citas médicas
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<HealingIcon />}>

                                <Typography variant="body1">
                                    Incapacidades
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<AccountCircleIcon />}>

                                <Typography variant="body1">
                                    Mi perfil de riesgo
                                </Typography>

                            </Button>
                        </Stack>
                    </Grid> : <p>Nothing to render</p>
                }

                {
                    procedureDisplay ? <Grid item>


                        <Stack direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={8}
                        >
                            <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>

                                <Typography variant="body1">
                                    Atención en Salud
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<HealingIcon />}>

                                <Typography variant="body1">
                                    Incapacidades
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<AccountCircleIcon />}>

                                <Typography variant="body1">
                                    Mi perfil de riesgo
                                </Typography>

                            </Button>
                        </Stack>
                    </Grid> : <p>Nothing to render</p>
                } */}
