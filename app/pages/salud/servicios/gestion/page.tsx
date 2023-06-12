"use client"

import React from 'react'
import LayoutSalud from '@/app/layouts/LayoutSalud';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, TextField, Button } from '@mui/material';
import { BaseForm } from '@/app/components/General/BaseForm';
import { formGestionCita } from '@/app/types/salud/servicios/gestion/formsGestion';
import { apiAgendarCitaMedica } from '@/app/api/Salud/servicios/gestion/agendar_cita_medica';
import { apiCancelarCitaMedica } from '@/app/api/Salud/servicios/gestion/cancelar_cita_medica';
import { response } from './interface/response.interface';


export default function GestionarCitas() {

    //1. Toma de datos formularios
    const [paramsAgendarCita, setParamsAgendarCita] = React.useState<formGestionCita>({
        cedula: 0,
        fecha: '',
        especialidad: ''
    })

    const [paramsCancelarCita, setParamsCancelarCita] = React.useState<formGestionCita>({
        cedula: 0,
        fecha: '',
        especialidad: ''
    })

    //2. Manejo de las entradas, es aqui donde alteramos los estados del paso anterior.
    const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParamsAgendarCita({
            ...paramsAgendarCita, [e.target.name]: e.target.value
        })
    }

    const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParamsCancelarCita({
            ...paramsCancelarCita, [e.target.name]: e.target.value
        })
    }

    //3. Manejo del formulario, este debe hacer la request para que se actualicen los datos.
    const [scheduleApointment, setscheduleApointment] = React.useState<response[] | null>(null);
    const handleActualizacion = (e: React.FormEvent<HTMLFormElement>) => {

        //Se detiene el comportamiendo por defecto del formulario.
        e.preventDefault();

        //Llamamos a las funciones que golpean los endpoint
        apiAgendarCitaMedica.putAgendarCita(paramsAgendarCita.cedula, paramsAgendarCita.fecha, paramsAgendarCita.especialidad).then((response) => {
            setscheduleApointment(response.data);
            console.log(scheduleApointment)
        }).catch((error) => {
            console.log(`${error}: hubo un error actualizando`)
        })
    }

    const [cancelAppointment, setcancelAppointment] = React.useState<response[] | null>(null);
    const handleCancelacion = (e: React.FormEvent<HTMLFormElement>) => {

        //Se detiene el comportamiendo por defecto del formulario.
        e.preventDefault();

        //Llamamos a las funciones que golpean los endpoint
        apiCancelarCitaMedica.putCancelarCita(paramsCancelarCita.cedula, paramsCancelarCita.fecha, paramsCancelarCita.especialidad).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(`${error}: hubo un error cancelando`)
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
                    sx={{ width: '75%' }}>

                    <BaseForm title='Agendar una cita' children={
                        <>
                            <TextField name='cedula' onChange={handleChange1} placeholder='Cédula' />
                            <TextField name='fecha' onChange={handleChange1} placeholder='fecha' />
                            <TextField name='especialidad' onChange={handleChange1} placeholder='Especialidad' />
                        </>
                    }
                        children2={
                            <Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Agendar</Button>
                        }

                        children3={
                            <>
                                {
                                    scheduleApointment !== null ? ( //if we got elements then we render them. if not then we don't render nothing.
                                        <Grid container
                                            component="div"
                                            justifyContent="center"
                                            alignItems="center"
                                            direction="row"
                                            spacing={1}
                                            sx={{ height: "100%", mt: 3 }}>

                                            {
                                                scheduleApointment!.map((response) => (
                                                    <Grid key={response.Key} item xs={12}>
                                                        <p> {response.Answer}  </p>
                                                    </Grid>
                                                ))

                                            }

                                        </Grid>

                                    ) : <p>No se ha podido realizar la petición.</p>}
                            </>
                        }
                        submit={handleActualizacion}
                    />
                </Grid>

                <Grid item
                    sx={{ width: '75%' }}>

                    <BaseForm title='Cancelar una cita' children={
                        <>
                            <TextField name='cedula' onChange={handleChange2} placeholder='Cédula' />
                            <TextField name='fecha' onChange={handleChange2} placeholder='fecha' />
                            <TextField name='especialidad' onChange={handleChange2} placeholder='Especialidad' />
                        </>
                    }
                        children2={
                            <Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Cancelar</Button>
                        }

                        children3={
                            <>
                                {
                                    cancelAppointment !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                        <Grid container
                                            component="div"
                                            justifyContent="center"
                                            alignItems="center"
                                            direction="row"
                                            spacing={1}
                                            sx={{ height: "100%", mt: 3 }}>

                                            {
                                                cancelAppointment!.map((response) => (
                                                    <Grid key={response.Key} item xs={12}>
                                                        <p> {response.Answer}  </p>
                                                    </Grid>
                                                ))

                                            }
                                        </Grid>

                                    ) : <p>No se pudo procesar su petición.</p>}
                            </>
                        }
                        submit={handleCancelacion}
                    />
                </Grid>
            </Grid>
        </LayoutSalud>
    )
}


