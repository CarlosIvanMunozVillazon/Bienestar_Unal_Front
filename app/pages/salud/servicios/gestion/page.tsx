"use client"

import React from 'react'
import LayoutSalud from '@/app/layouts/LayoutSalud';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, TextField, Button } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { BaseForm } from '@/app/components/General/BaseForm';
// AMBAS FUNCIONES USAN *****PUT*****
// PARÁMETROS : user_id : number;
export default function GestionarCitas() {

    //Schedule appointments
    const [scheduleApointment, setscheduleApointment] = React.useState<null>(null);

    //Cancel appointments
    const [cancelAppointment, setcancelAppointment] = React.useState<null>(null);

    const handleSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        //endpoint function here
    }

    const handleSubmit2 = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        //endpoint function here
    }

    return (
        <LayoutSalud>
            <p>Put con user id para agendar cita</p>
            <p>CancelarCita put con user id para el path y para el query fecha e incapacidad</p>
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
                            <TextField placeholder='Cédula' />

                            <TextField placeholder='fecha' />
                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker format="YYYY-MM-DD" />
                            </LocalizationProvider> */}

                            <TextField placeholder='Especialidad' />

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
                    />

                </Grid>

                <Grid item
                    sx={{ width: '75%' }}>

                    <BaseForm title='Cancelar una cita' children={
                        <>
                            <TextField placeholder='Cédula' />

                            <TextField placeholder='fecha' />
                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker format="YYYY-MM-DD" />
                            </LocalizationProvider> */}

                            <TextField placeholder='Especialidad' />



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
                        submit={handleSubmit2}
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