"use client"
import BasicLayout from '@/app/layouts/BasicLayout'
import { Box, Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

import RestaurantIcon from '@mui/icons-material/Restaurant';
import PaidIcon from '@mui/icons-material/Paid';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import WorkIcon from '@mui/icons-material/Work';
import LayoutFomento from '@/app/layouts/LayoutFomento';

import { BaseForm } from '@/app/components/General/BaseForm';


export default function Corresponsabilidad() {

    const [corActividades, setCorActividades] = React.useState(null);
    const [corHoras, setHoras] = React.useState(null);

    const handleSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //call endpoint function
    }

    const handleSubmit2 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //call endpoint function
    }


    {/**

    # CORRESPONSABILIDAD # CORRESPONSABILIDAD # CORRESPONSABILIDAD    
# 2.MI CORRESPONSABILIDAD
    El estudiante puede consultar sus actividades de corresponsabilidad realizadas
	sp_actividadcorresp_est(in id int)

# 3.HORAS PENDIENTES CORRESPONSABILIDAD por actividad
    El estudiante puede consultar la cantidad de horas pendientes de corresponsabilidad
	function horas_corresponsabilidad_est(id_est int)
    
*/}

    return (
        <LayoutFomento>
            <p>dos componentes para verificar horas faltantes y demás</p>

            <Grid container
                component='main'
                alignItems='center'
                justifyContent='center'
                direction='column'
                spacing={5}
                sx={{ width: '100%' }}>

                {/*Convocatorias de:  fomento emprendimiento*/}
                {/*Parámetros : cédula de estudiante, y tema de emprendimiento */}

                <Grid item
                    sx={{ width: '75%' }}
                >

                    <BaseForm title='Mi corresponsabilidad'
                        children={
                            <>
                                <TextField placeholder='Cédula' />
                            </>
                        }

                        children2={
                            <Button type='submit' variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>

                        }

                        children3={
                            <>

                            {
                                corActividades !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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
                        submit={handleSubmit1}
                    ></BaseForm>

                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >
                    
                    <BaseForm title='Horas Pendientes'
                        children={
                            <>
                                <TextField placeholder='Cédula' />
                            </>
                        }

                        children2={
                            <Button type='submit' variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>
                        }

                        children3={
                            <>

                            {
                                corHoras !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                <Grid container
                                    component="div"
                                    justifyContent="center"
                                    alignItems="center"
                                    direction="row"
                                    spacing={1}
                                    sx={{ height: "100%" }}>

                                    {
                                        // corHoras!.map((convocatoria) => (
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

            </Grid>
        </LayoutFomento>
    )
}