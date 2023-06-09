"use client"
import React from 'react'

import { Button, Grid, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import LayoutFomento from '@/app/layouts/LayoutFomento';
import { BaseForm } from '@/app/components/General/BaseForm';
import { formInfoPorCedula } from '@/app/types/salud/servicios/informacion/formsInformacion';
import { actividades } from './interface/actividades.interface';
import { apiActividadCorresponsabilidad } from '@/app/api/GestionFomento/corresponsabilidad/actividad_corresponsabilidad';
import { horasPendientes } from './interface/horasPendientes.interface';
import { apiHorasCorresponsabilidad } from '@/app/api/GestionFomento/corresponsabilidad/horas_corresponsabilidad';
import { formInsertarActividadCor } from '@/app/types/gestionYFomento/corresponsabilidad/corresponsaibiliad';
import { apiInsertarActividadCorresponsabilidad } from '@/app/api/GestionFomento/corresponsabilidad/insertar_actividad_corresponsabilidad';
import { response } from './interface/response.interface';


export default function Corresponsabilidad() {

    //1. que una persona pueda consultar sus actividades de corresponsabilidad
    const [paramsConsultarActividades, setParamsConsultarActividades] = React.useState<formInfoPorCedula>({
        cedula: 0
    })

    //2. change handler
    const handleChgConsultarCorresp = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParamsConsultarActividades({
            ...paramsConsultarActividades, [e.target.name]: e.target.value
        })
    }

    //3. data holders
    const [actividadesCorresponsabilidad, setActividadesCorresponsabilidad] = React.useState<actividades[] | null>(null)

    //4. submit handlers.
    const handleConsultaActividadesCorr = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        apiActividadCorresponsabilidad.getActividadPersona(paramsConsultarActividades.cedula).then((response) => {
            setActividadesCorresponsabilidad(response.data)
            console.log(actividadesCorresponsabilidad)
        }).catch((Error) => {
            console.log(`${Error} : No es posible consultar actividades.`)
        })
    }


    //1.
    const [paramsConsultarHoras, setParamsConsultarHoras] = React.useState<formInfoPorCedula>({
        cedula: 0
    })

    //2.
    const handleChgHoras = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParamsConsultarHoras({
            ...paramsConsultarHoras, [e.target.name]: e.target.value
        })
    }

    //3.
    const [horasCorresponsabilidad, setHorasCorresponsabilidad] = React.useState<horasPendientes[] | null>(null);

    //4.
    const hanldeConsultarHoras = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        apiHorasCorresponsabilidad.getHorasUser(paramsConsultarHoras.cedula).then((response) => {
            setHorasCorresponsabilidad(response.data);
            console.log(horasCorresponsabilidad)
        }).catch((Error) => {
            console.log(`${Error} : No se puede consultar horas de corresponsabilidad.`)
        })
    }


    //1.
    const [paramsInsertarCor, setParamsInsertarCor] = React.useState<formInsertarActividadCor>({
        cedula: 0,
        actividad: '',
        horas: 0
    })

    //2.
    const handleChgInsertarHoras = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParamsInsertarCor({
            ...paramsInsertarCor, [e.target.name]: e.target.value
        })
    }

    //Result insertar act. Corresponsabilidad
    const [result_insertar_act_cor, set_result_insertar_act_cor] = React.useState<response[] | null>(null);

    //3.
    const handleInsertarHoras = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        apiInsertarActividadCorresponsabilidad.post_insertar_actividad_corresponsabilidad(paramsInsertarCor.cedula,
            paramsInsertarCor.actividad, paramsInsertarCor.horas).then((response) => {
                set_result_insertar_act_cor(response.data)
                console.log(result_insertar_act_cor)
            }).catch((Error) => {
                console.log(`${Error} Imposible insertar actividad, hay un error.`)
            })
    }


    return (
        <LayoutFomento>
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

                    <BaseForm title='Mi corresponsabilidad'
                        children={
                            <>
                                <TextField name='cedula' onChange={handleChgConsultarCorresp} placeholder='Cédula' />
                            </>
                        }

                        children2={
                            <Button type='submit' variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>

                        }

                        children3={
                            <>

                                {
                                    actividadesCorresponsabilidad !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                        <Grid container
                                            component="div"
                                            justifyContent="center"
                                            alignItems="center"
                                            direction="row"
                                            spacing={1}
                                            sx={{ height: "100%", mt: 3 }}>

                                            <Grid item xs={4} sx={{ bgcolor: "lightgray" }}>
                                                <Typography variant='body1'>
                                                    ID
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4} sx={{ bgcolor: "lightgray" }} >
                                                <Typography variant='body1'>
                                                    ACTIVIDAD
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4} sx={{ bgcolor: "lightgray" }}>
                                                <Typography variant='body1'>
                                                    HORAS
                                                </Typography>
                                            </Grid>

                                            {
                                                actividadesCorresponsabilidad.length == 0 ? <p>No se han encontrado actividades de corresponsabilidad</p>
                                                :actividadesCorresponsabilidad!.map((actividad) => (

                                                    <>
                                                        <Grid key={actividad.Key} item xs={4}>
                                                            {actividad.actCorID}
                                                        </Grid>

                                                        <Grid key={actividad.Key + 1} item xs={4}>
                                                            {actividad.actCorActividad}
                                                        </Grid>

                                                        <Grid key={actividad.Key + 2} item xs={4}>
                                                            {actividad.actCorHoras}
                                                        </Grid>
                                                    </>

                                                ))

                                            }
                                        </Grid>

                                    ) : <p>No se registran actividades.</p>}
                            </>
                        }
                        submit={handleConsultaActividadesCorr}
                    ></BaseForm>

                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >

                    <BaseForm title='Horas Pendientes'
                        children={
                            <>
                                <TextField name='cedula' onChange={handleChgHoras} placeholder='Cédula' />
                            </>
                        }

                        children2={
                            <Button type='submit' variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>
                        }

                        children3={
                            <>

                                {
                                    horasCorresponsabilidad !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                        <Grid container
                                            component="div"
                                            justifyContent="center"
                                            alignItems="center"
                                            direction="row"
                                            spacing={1}
                                            sx={{ height: "100%", mt: 3 }}>

                                            <Grid item xs={12} sx={{ bgcolor: "lightgray" }}>
                                                <Typography variant='body1'>
                                                    HORAS
                                                </Typography>
                                            </Grid>

                                            {
                                                horasCorresponsabilidad!.map((horas) => (
                                                    <Grid key = {horas.Key} item xs={12}>
                                                        {horas.horas}
                                                    </Grid>
                                                ))

                                            }
                                        </Grid>

                                    ) : <p>No se registran horas de corresponsabilidad.</p>}
                            </>
                        }
                        submit={hanldeConsultarHoras}
                    ></BaseForm>

                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >

                    <BaseForm title='Registrar mi corresponsabilidad.'
                        children={
                            <>
                                <TextField name='cedula' onChange={handleChgInsertarHoras} placeholder='Cédula' />
                                <TextField name='actividad' onChange={handleChgInsertarHoras} placeholder='Actividad' />
                                <TextField name='horas' onChange={handleChgInsertarHoras} placeholder='Horas' />
                            </>
                        }

                        children2={
                            <Button type='submit' variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }}>Insertar</Button>

                        }

                        children3={
                            <>

                                {
                                    result_insertar_act_cor !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                        <Grid container
                                            component="div"
                                            justifyContent="center"
                                            alignItems="center"
                                            direction="row"
                                            spacing={1}
                                            sx={{ height: "100%" }}>

                                            {
                                                 result_insertar_act_cor!.map((result) => (
                                                     <Grid item xs={3}>
                                                        {result.Answer}
                                                     </Grid>
                                                 ))

                                            }
                                        </Grid>

                                    ) : null}
                            </>
                        }
                        submit={handleInsertarHoras}
                    ></BaseForm>

                </Grid>

            </Grid>
        </LayoutFomento>
    )
}