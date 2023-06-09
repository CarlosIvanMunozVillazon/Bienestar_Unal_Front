"use client"
import BasicLayout from '@/app/layouts/BasicLayout'
import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

import RestaurantIcon from '@mui/icons-material/Restaurant';
import PaidIcon from '@mui/icons-material/Paid';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import WorkIcon from '@mui/icons-material/Work';
import LayoutFomento from '@/app/layouts/LayoutFomento';
import LayoutDeporte from '@/app/layouts/LayoutDeporte';
import { BaseForm } from '@/app/components/General/BaseForm';
import { TorneoInterno } from './interface/torneosInternos.interface';
import { EventoTaller } from './interface/eventoTaller.interface';
import { Proyecto } from './interface/proyecto.interface';

export default function Otros() {

    const [torneos, setTorneos] = React.useState(null);
    const [eventosta, setEventosta] = React.useState(null);
    const [proyectos, setProyectos] = React.useState(null);
    const [evetetaPrograma, setEvetaPrograma] = React.useState(null);

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

    const handleSubmit4 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //endpoint function here
    }
    // OTROS
    // # 1. Un usuario necesita ver los torneos internos disponibles
    // 	sp_consultar_torneos_internos() **

  
    // # 6. Se quiere consultar información acerca de eventos, talleres y proyectos disponbibles para el área de deporte
    // 	pas_consultar_eventoTaller_programa (in idPrograma int) usar id's programas de deportes


    return (
        <LayoutDeporte>
            <br />

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
                        <Typography variant='h6'>Torneos Internos
                        </Typography>
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Orange" }} endIcon={<SearchIcon />}>Consultar</Button>}

                        children3={<>
                            {torneos !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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
                    sx={{ width: '75%' }}
                >

                    <BaseForm title='Consultar eventos y talleres' children={
                        <TextField placeholder='id EventoTaller' />
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Orange" }} endIcon={<SearchIcon />}>Consultar</Button>}

                        children3={<>
                            {eventosta !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                        </>} submit={handleSubmit2}
                    ></BaseForm>


                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >

                    <BaseForm title='Consultar proyectos' children={
                        <TextField placeholder='id Proyecto' />
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Orange" }} endIcon={<SearchIcon />}>Consultar</Button>}

                        children3={<>
                            {proyectos !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                        </>} submit={handleSubmit3}
                    ></BaseForm>


                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >

                    <BaseForm title='Consultar eventos y talleres por programa' children={
                        <TextField placeholder='id Programa' />
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Orange" }} endIcon={<SearchIcon />}>Consultar</Button>}

                        children3={<>
                            {evetetaPrograma !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                        </>} submit={handleSubmit4}
                    ></BaseForm>


                </Grid>
            </Grid>




        </LayoutDeporte>
    )
}