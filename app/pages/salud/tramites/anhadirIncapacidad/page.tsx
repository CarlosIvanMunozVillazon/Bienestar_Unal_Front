"use client"

import React from 'react'
import LayoutSalud from '@/app/layouts/LayoutSalud';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Paper, Box, Typography, Stack, TextField, Button } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function AgregarIncapacidad() {

    //Schedule appointments

    const [scheduleApointment, setscheduleApointment] = React.useState<null>(null);

    return (
        <LayoutSalud>
            <p>Post </p>
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
                    sx={{ width: '85%' }}
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

                                        <TextField placeholder='Enfermedad' />

                                        <TextField placeholder='Días' />

                                    </Stack>


                                </Grid>

                                <Grid item>
                                    <Button type='submit' variant="contained"
                                        sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Agregar</Button>

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

            </Grid>
        </LayoutSalud>
    )
}