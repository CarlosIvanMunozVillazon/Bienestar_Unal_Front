"use client"

import React from 'react'
import { Box, Breadcrumbs, Button, Divider, Grid, IconButton, Link, Paper, Stack, TextField, Typography } from '@mui/material'
import { BasicNavbar } from '@/app/components/General/BasicNavbar';
import SearchIcon from '@mui/icons-material/Search';
import LayoutSalud from '@/app/layouts/LayoutSalud';
import { Cita } from './interface/cita.interface';
import { BaseForm } from '@/app/components/General/BaseForm';

export default function Informacion() {


    //Todo lo que involucre cédula

    //Available appointments
    const [availableAppointments, setAvailableAppointments] = React.useState<Cita[] | null>(null);
    const [myAppointments, setMyAppointments] = React.useState<null>(null);
    const [resultadosCitas, setresultadosCitas] = React.useState(null);
    // # 1. Ver las citas medicas disponibles:
    // pas_citas_disponibles()

    const handleSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        //endpoint function here
    }

    const handleSubmit2 = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        //endpoint function here
    }

    const handleSubmit3 = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        //endpoint function here
    }

    return (
        <LayoutSalud>
            <p>Citas disponibles</p>
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
                    <BaseForm title='' children={
                        <Typography variant='h6'>Citas Disponibles
                        </Typography>
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Consultar</Button>}

                        children3={<>
                            {availableAppointments !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                            ) : null}

                        </>} submit={handleSubmit1}
                    ></BaseForm>

                </Grid>

                <Grid item
                    sx={{ width: '75%' }}>

                    <BaseForm title='Mis Citas' children={
                        <TextField placeholder='Cédula' />
                    }

                        children2={
                            <Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Consultar</Button>

                        }

                        children3={
                            <>
                                {
                                    myAppointments !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                                    ) : null}
                            </>
                        }

                        submit={handleSubmit2}
                    ></BaseForm>


                </Grid>

                <Grid item
                    sx={{ width: '75%' }}>

                    <BaseForm title='Resultados de Citas' children={
                        <TextField placeholder='Cédula' />
                    }

                        children2={
                            <Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Consultar</Button>
                        }

                        children3={
                            <>
                                {
                                    resultadosCitas !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                                    ) : null}
                            </>
                        }

                        submit={
                            handleSubmit3
                        }
                    />



                </Grid>

            </Grid>
        </LayoutSalud >
    )
}