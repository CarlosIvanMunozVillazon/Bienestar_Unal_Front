"use client"

import React from 'react'
import LayoutSalud from '@/app/layouts/LayoutSalud';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, TextField, Button } from '@mui/material';
import { BaseForm } from '@/app/components/General/BaseForm';
import { formGestionCita } from '@/app/types/salud/servicios/gestion/formsGestion';
import { apiAgendarCitaMedica } from '@/app/api/Salud/servicios/gestion/agendar_cita_medica';
import { apiCancelarCitaMedica } from '@/app/api/Salud/servicios/gestion/cancelar_cita_medica';
// AMBAS FUNCIONES USAN *****PUT*****
// PARÁMETROS : user_id : number;
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
    const [scheduleApointment, setscheduleApointment] = React.useState<boolean>(false);
    //3. Manejo del formulario, este debe hacer la request para que se actualicen los datos.
    const handleActualizacion = (e: React.FormEvent<HTMLFormElement>) => {

        //Se detiene el comportamiendo por defecto del formulario.
        e.preventDefault();

        //Llamamos a las funciones que golpean los endpoint
        apiAgendarCitaMedica.putAgendarCita(paramsAgendarCita.cedula, paramsAgendarCita.fecha, paramsAgendarCita.especialidad).then((response) => {
            console.log(response.data)
            setscheduleApointment(scheduleApointment => !scheduleApointment);
        }).catch((error) => {
            console.log(`${error}: hubo un error actualizando`)
        })
    }

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



    //Schedule appointments
    

    //Cancel appointments
    const [cancelAppointment, setcancelAppointment] = React.useState<null>(null);


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

                {/*Convocatorias de:  fomento emprendimiento*/}
                {/*Parámetros : cédula de estudiante, y tema de emprendimiento */}

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
                                    scheduleApointment == false ? ( //if we got elements then we render them. if not then we don't render nothing.
                                    <p></p>
                                        
                                    ) : <p>Su cita se ha modificado exitosamente.</p>}
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
                        submit={handleCancelacion}
                    />



                </Grid>

            </Grid>
        </LayoutSalud>
    )
}


{/*

<Grid item
                    sx={{ width: '75%' }}
                >


                    <Paper>
                        <Box component='form'
                            sx={{ width: '100%' }}
                        >
                            <Typography variant='h6'>Agendar una cita
                            </Typography>
                            <Grid
                                container
                                justifyContent="space-between"
                                direction="row"
                                alignItems="center"
                            >
                                <Grid item>

                                    <Stack direction='row'
                                        spacing={4}>


                                        <TextField placeholder='Cédula' />

                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker format="YYYY/MM/DD" />
                                        </LocalizationProvider>

                                        <TextField placeholder='Especialidad' />


                                    </Stack>


                                </Grid>

                                <Grid item>
                                    <Button type='submit' variant="contained"
                                        sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Agendar</Button>

                                </Grid>

                            </Grid>



                        </Box>

                        {
                            scheduleApointment !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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


                    </Paper>



                </Grid>

*/}