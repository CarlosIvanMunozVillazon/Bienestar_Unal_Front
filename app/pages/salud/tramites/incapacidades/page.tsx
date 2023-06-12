"use client"

import React from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import LayoutSalud from '@/app/layouts/LayoutSalud';
import SearchIcon from '@mui/icons-material/Search';
import { BaseForm } from '@/app/components/General/BaseForm';

import { Incapacidad } from './interface/incapacidad.interface';
import { formInfoPorCedula } from '@/app/types/salud/servicios/informacion/formsInformacion';
import { apiIncapacidades } from '@/app/api/Salud/tramites/incapacidades/incapacidades';
import { formInsertarIncapacidad, formModificarIncapacidad } from '@/app/types/salud/tramites/incapacidades/formsIncapacidades';
import { apiInsertarIncapacidad } from '@/app/api/Salud/tramites/incapacidades/insertar_incapacidad';
import { apiModificarIncapacidad } from '@/app/api/Salud/tramites/incapacidades/modificar_incapacidad';
import { response } from './interface/response.interface';


export default function Incapacidades() {

    //1. definir donde guardo lo que se ingresa en los formularios.
    const [paramsEstadoIncapacidad, setParamsEstadoIncapacidad] = React.useState<formInfoPorCedula>({
        cedula: 0
    })

    //2. manejar lo que sucede cuando se escribe en el input.
    const handleChangeEstadoInc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParamsEstadoIncapacidad({
            ...paramsEstadoIncapacidad, [e.target.name]: e.target.value
        })
    }

    //3. definir donde vamos a guardar la respuesta de la consulta
    const [incapacidadesRecibidas, setincapacidadesRecibidas] = React.useState<Incapacidad[] | null>(null);

    //4. definimos lo que ocurre al momento de subir el formulario.
    const handleConsultarEstado = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        apiIncapacidades.getIncapacidades(paramsEstadoIncapacidad.cedula).then((response) => {
            setincapacidadesRecibidas(response.data)
            console.log(incapacidadesRecibidas)
        }).catch((error) => {
            console.log(`${error}`)
        })

    }


    // @app.post("/insertar_incapacidad/{user_id}", tags=["Salud"])
    // async def add_incapacidad(user_id: int, fecha: datetime.datetime, enfermedad: str, dias: int):

    //1. Definir guardado de datos
    const [paramsAgregarIncapacidad, setParamsAgregarIncapacidad] = React.useState<formInsertarIncapacidad>({
        cedula: 0,
        fecha: '',
        enfermedad: '',
        dias: 0
    })

    //2. Definir change handler
    const handleChgAgregarIncapacidad = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParamsAgregarIncapacidad({
            ...paramsAgregarIncapacidad, [e.target.name]: e.target.value
        })
    }

    //3. Definir submit handler
    const [agregar_incapacidad, set_agregar_incapacidad] = React.useState<response[] | null>(null);
    const handleAgregarIncapacidad = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        apiInsertarIncapacidad.postInsertarIncapacidad(paramsAgregarIncapacidad.cedula, paramsAgregarIncapacidad.fecha, paramsAgregarIncapacidad.enfermedad, paramsAgregarIncapacidad.dias).then((response) => {
            set_agregar_incapacidad(response.data)
            console.log(agregar_incapacidad)
        }).catch((error) => {
            console.log(`${error}: Imposible agregar incapacidad nueva.`)
        })
    }


    //1. as usual
    const [paramsModificarIncapacidad, setParamsModificarIncapacidad] = React.useState<formModificarIncapacidad>({
        IdIncapacidad: 0,
        fecha: '',
        enfermedad: '',
        dias: 0
    })

    //2. as usual xddd
    const handleChgModificarInc = (e: React.ChangeEvent<HTMLInputElement>) => {

        setParamsModificarIncapacidad({
            ...paramsModificarIncapacidad, [e.target.name]: e.target.value
        })
    }

    //3. as usual than ever XD
    const [modificar_incapacidad, set_modificar_incapacidad] = React.useState<response[] | null>(null);

    const handleModificarIncapacidad = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        apiModificarIncapacidad.putModificarIncapacidad(paramsModificarIncapacidad.IdIncapacidad, paramsModificarIncapacidad.fecha, paramsModificarIncapacidad.enfermedad, paramsModificarIncapacidad.dias).then((response) => {
            set_modificar_incapacidad(response.data)
            console.log(modificar_incapacidad)
        }).catch((Error) => {
            console.log(`${Error}: Imposible modificar incapacidad`)
        })
    }



    //Modificar incapacidades usa ***PUT****



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
                    <BaseForm title='Estado Incapacidad' children={
                        <TextField name='cedula' onChange={handleChangeEstadoInc} placeholder='Cédula' />
                    }
                        children2={
                            <Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Consultar</Button>

                        }

                        children3={
                            <>
                                {
                                    incapacidadesRecibidas !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                        <Grid container
                                            component="div"
                                            justifyContent="center"
                                            alignItems="center"
                                            direction="row"
                                            spacing={1}
                                            sx={{ height: "100%", mt: 3 }}>

                                            <Grid item xs={3} sx={{ bgcolor: "lightgray" }}
                                            >
                                                <Typography variant='body1'>
                                                    ID
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={3} sx={{ bgcolor: "lightgray" }} >
                                                <Typography variant='body1'>
                                                    FECHA
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={3} sx={{ bgcolor: "lightgray" }}>
                                                <Typography variant='body1'>
                                                    VERIFICADO
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={3} sx={{ bgcolor: "lightgray" }}>
                                                <Typography variant='body1'>
                                                    APROBADO
                                                </Typography>
                                            </Grid>

                                            {
                                                incapacidadesRecibidas!.map((incapacidad) => (
                                                    <>
                                                        <Grid key={incapacidad.key} item xs={3}>
                                                            {incapacidad.id}
                                                        </Grid>

                                                        <Grid key={incapacidad.key + 1} item xs={3}>
                                                            {incapacidad.fecha}
                                                        </Grid>

                                                        <Grid key={incapacidad.key + 2} item xs={3}>
                                                            {incapacidad.verificado}
                                                        </Grid>

                                                        <Grid key={incapacidad.key + 3} item xs={3}>
                                                            {incapacidad.aprobado}
                                                        </Grid>
                                                    </>

                                                ))
                                            }

                                        </Grid>

                                    ) : <p>No hay incapacidades registradas.</p>}
                            </>
                        }

                        submit={handleConsultarEstado}
                    ></BaseForm>

                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >
                    <BaseForm title='Agregar Incapacidad' children={
                        <>
                            <TextField name='cedula' onChange={handleChgAgregarIncapacidad} placeholder='Cédula' />
                            <TextField name='fecha' onChange={handleChgAgregarIncapacidad} placeholder='Fecha' />
                            <TextField name='enfermedad' onChange={handleChgAgregarIncapacidad} placeholder='Enfermedad' />
                            <TextField name='dias' onChange={handleChgAgregarIncapacidad} placeholder='Días' />
                        </>
                    }
                        children2={
                            <Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Agregar</Button>
                        }

                        children3={
                            <>
                                {
                                    agregar_incapacidad !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                        <Grid container
                                            component="div"
                                            justifyContent="center"
                                            alignItems="center"
                                            direction="row"
                                            spacing={1}
                                            sx={{ height: "100%", mt: 3 }}>

                                            {
                                                agregar_incapacidad!.map((response) => (
                                                    <Grid key={response.Key} item xs={12}>
                                                        <p> {response.Answer}  </p>
                                                    </Grid>
                                                ))

                                            }
                                        </Grid>

                                    ) : <p>No se puede procesar la petición.</p>}
                            </>
                        }

                        submit={handleAgregarIncapacidad}
                    ></BaseForm>

                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >
                    <BaseForm title='Modificar Incapacidad' children={
                        <>
                            <TextField name='IdIncapacidad' onChange={handleChgModificarInc} placeholder='id Incapacidad' />

                            <TextField name='fecha' onChange={handleChgModificarInc} placeholder='fecha' />


                            <TextField name='enfermedad' onChange={handleChgModificarInc} placeholder='Enfermedad' />
                            <TextField name='dias' onChange={handleChgModificarInc} placeholder='Días' />
                        </>
                    }
                        children2={
                            <Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Modificar</Button>


                        }

                        children3={
                            <>
                                {
                                    modificar_incapacidad !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                        <Grid container
                                            component="div"
                                            justifyContent="center"
                                            alignItems="center"
                                            direction="row"
                                            spacing={1}
                                            sx={{ height: "100%", mt: 3 }}>

                                            {
                                                modificar_incapacidad!.map((response) => (
                                                    <Grid key={response.Key} item xs={12}>
                                                        <p> {response.Answer}</p>
                                                    </Grid>
                                                ))

                                            }
                                        </Grid>

                                    ) : <p>No se puede procesar la petición.</p>}
                            </>
                        }
                        submit={handleModificarIncapacidad}
                    ></BaseForm>
                </Grid>
            </Grid>
        </LayoutSalud>
    )
}