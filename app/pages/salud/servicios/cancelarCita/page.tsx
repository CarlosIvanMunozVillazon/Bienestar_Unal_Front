"use client"

import React from 'react'
import { Box, Breadcrumbs, Button, Divider, Grid, IconButton, Link, Paper, Stack, TextField, Typography } from '@mui/material'
import { BasicNavbar } from '@/app/components/General/BasicNavbar';
import SearchIcon from '@mui/icons-material/Search';
import LayoutSalud from '@/app/layouts/LayoutSalud';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


export default function CancelarCita() {

    //Available appointments
    const [cancelAppointment, setcancelAppointment] = React.useState<null>(null);


    return (
        <LayoutSalud>
            CancelarCita put con user id para el path y para el query fecha e incapacidad
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


                    <Paper>
                        <Box component='form'
                            sx={{ width: '100%' }}
                        >
                            <Typography variant='h6'>Cancelar Cita
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
                                            <DatePicker format="YYYY/MM/DD"/>
                                        </LocalizationProvider>

                                        <TextField placeholder='Especialidad' />


                                    </Stack>


                                </Grid>

                                <Grid item>
                                    <Button type='submit' variant="contained"
                                        sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Cancelar</Button>

                                </Grid>

                            </Grid>



                        </Box>

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


                    </Paper>



                </Grid>

            </Grid>
        </LayoutSalud>
    )
}
