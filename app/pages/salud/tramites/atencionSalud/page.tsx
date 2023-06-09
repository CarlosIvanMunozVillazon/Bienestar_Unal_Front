"use client"

import React from 'react'
import { Button, Grid, TextField } from '@mui/material'
import LayoutSalud from '@/app/layouts/LayoutSalud';
import SearchIcon from '@mui/icons-material/Search';
import { BaseForm } from '@/app/components/General/BaseForm';
import { formInfoPorCedula } from '@/app/types/salud/servicios/informacion/formsInformacion';
import { AtencionSalud } from './interface/atencionSalud.interface';
import { apiAtencionesSalud } from '@/app/api/Salud/tramites/atencionSalud/atencionessalud';


export default function AtencionSalud() {

    //1. Establecer donde vamos a guardar la información de nuestro formulario.
    const [paramsEstadoAtencion, setParamsEstadoAtencion] = React.useState<formInfoPorCedula>({
        cedula: 0
    })

    //2. Manejo de los input para guardar los datos del input. Esta funcion debe ser llamada en los text input.
    // Los cambios se guardan de manera progresiva.
    const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParamsEstadoAtencion({
            ...paramsEstadoAtencion, [e.target.name]: e.target.value
        })
    }

    //3. Establecemos donde vamos a guardar la respuesta.
    const [estadosAtencion, setEstadosAtencion] = React.useState<AtencionSalud[] | null>(null);

    //4. Definimos lo que sucede cuando se sube el formulario.
    const handleConsultaEstadoAtencion = (e: React.FormEvent<HTMLFormElement>) => {
        //Detenemos el comportamiento por defecto del formulario.
        e.preventDefault();

        //Llamamos las funciones asincronas para traer los datos.
        apiAtencionesSalud.getAtencionesSalud(paramsEstadoAtencion.cedula).then((response) => {
            setEstadosAtencion(response.data);
            console.log(estadosAtencion)
        }).catch((error) => {
            console.log(`${error}`)
        })
    }

    //AgregarAtencionEnSalud usa ***POST*** 
    //Parámetros : user_id:number
    const [agregar_atencion_en_salud, set_agregar_atencion_en_salud] = React.useState(null);

    //ModificarAtencionSalud usa ***PUT***
    const [modificarAtenciones, setmodificarAtenciones] = React.useState(null);


    const hanldeSubmit2 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const hanldeSubmit3 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <LayoutSalud>
            <p>consultar, añadir, modificar AtencionSalud</p>
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
                    <BaseForm title='Estado Atención' children={
                        <TextField name='cedula' onChange={handleChange1} placeholder='Cédula' />
                    }
                        children2={
                            <Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Consultar</Button>

                        }

                        children3={
                            <>
                                {
                                    estadosAtencion !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                        submit={handleConsultaEstadoAtencion}
                    ></BaseForm>

                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >
                    <BaseForm title='Agregar Atención' children={
                        <>
                            <TextField placeholder='Cédula' />

                            <TextField placeholder='Fecha' />

                            <TextField placeholder='Tipo' />
                        </>
                    }
                        children2={
                            <Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Agendar</Button>


                        }

                        children3={
                            <>
                                {
                                    agregar_atencion_en_salud !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                        submit={hanldeSubmit2}
                    ></BaseForm>

                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >
                    <BaseForm title='Modificar Atención' children={
                        <>
                            <TextField placeholder='Cédula' />

                            <TextField placeholder='Fecha' />

                            <TextField placeholder='Tipo' />
                        </>
                    }
                        children2={
                            <Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Modificar</Button>


                        }

                        children3={
                            <>
                                {
                                    modificarAtenciones !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                        submit={hanldeSubmit3}
                    ></BaseForm>

                </Grid>




            </Grid>
        </LayoutSalud >
    )
}