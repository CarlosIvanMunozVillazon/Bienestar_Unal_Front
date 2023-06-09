"use client"

import React from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import LayoutSalud from '@/app/layouts/LayoutSalud';
import { Cita } from './interface/cita.interface';
import { ResultadoCita } from './interface/resultadoCita.interface';
import { BaseForm } from '@/app/components/General/BaseForm';
import { formInfoPorCedula } from '@/app/types/salud/servicios/informacion/formsInformacion';
import { apiCitasDisponibles } from '@/app/api/Salud/servicios/informacion/citas_medicas_disponibles';
import { error } from 'console';
import { apiCitasAgendadas } from '@/app/api/Salud/servicios/informacion/citas_medicas_agendadas';
import { apiResultadoCitaMedica } from '@/app/api/Salud/servicios/informacion/resultado_cita_medica';

export default function Informacion() {


    //Toma de datos de formularios:
    //1. Citas disponibles, *no tiene parámetros*

    //2. Citas agendadas
    const [paramsCitasAgendadas, setParamsCitasAgendadas] = React.useState<formInfoPorCedula>({
        cedula : 0
    })

    //3. Resultados de citas
    const [paramsResultadosCitas, setParamsResultadosCitas] = React.useState<formInfoPorCedula>({
        cedula : 0
    })
    
    //******************** */
    //Aqui todos usan el interface de cita para las respuestas.
    //******************** */


    //Guardado de respuestas de peticiones
    const [citasDisponibles, setcitasDisponibles] = React.useState<Cita[] | null>(null);
    
    const [citasAgendadas, setcitasAgendadas] = React.useState<Cita[] | null>(null);
    
    const [resultadosCitas, setresultadosCitas] = React.useState<ResultadoCita[] | null>(null);


    //Guardado de datos de formularios
    const valueCitasAgendadas = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParamsCitasAgendadas({
            ...paramsCitasAgendadas, [e.target.name]:e.target.value
        })
    }

    const valueResultadosCitas = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParamsResultadosCitas({
            ...paramsResultadosCitas, [e.target.name] : e.target.value
        })
    }


    //Consumidores de API
    const handleCitasDisponibles = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        apiCitasDisponibles.getCitasDisponibles().then((response) => {
            setcitasDisponibles(response.data)
            console.log(citasDisponibles)
        }).catch((error) => {
            console.log(`${error}: no hay citas disponibles`)
        })
    }

    const handleMisCitas = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        apiCitasAgendadas.getCitasAgendadas(paramsCitasAgendadas.cedula).then((response) => {
            setcitasAgendadas(response.data)
            console.log(citasAgendadas)
        }).catch((error) => {
            console.log(`${error} no tienes citas agendadas`)
        })
    }
    const handleMisResultados = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        apiResultadoCitaMedica.getResultadoId(paramsResultadosCitas.cedula).then((response)=> {
            setresultadosCitas(response.data)
            console.log(resultadosCitas)
        }).catch((error) => {
            console.log(`${error} no hay resultados disponibles`)
        })
    }

    return (
        <LayoutSalud>
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
                        <Typography variant='h6'>Citas Disponibles
                        </Typography>
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Consultar</Button>}

                        children3={<>
                            {citasDisponibles !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                        </>} submit={handleCitasDisponibles}
                    ></BaseForm>

                </Grid>

                <Grid item
                    sx={{ width: '75%' }}>

                    <BaseForm title='Mis Citas' children={
                        <TextField name='cedula' onChange={valueCitasAgendadas} placeholder='Cédula' />
                    }

                        children2={
                            <Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Consultar</Button>

                        }

                        children3={
                            <>
                                {
                                    citasAgendadas !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                        submit={handleMisCitas}
                    ></BaseForm>


                </Grid>

                <Grid item
                    sx={{ width: '75%' }}>

                    <BaseForm title='Resultados de Citas' children={
                        <TextField name = 'cedula' onChange = {valueResultadosCitas} placeholder='Cédula' />
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
                            handleMisResultados
                        }
                    />
                </Grid>

            </Grid>
        </LayoutSalud >
    )
}