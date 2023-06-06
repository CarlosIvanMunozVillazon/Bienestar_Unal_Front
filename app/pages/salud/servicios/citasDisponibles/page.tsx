"use client"

import React from 'react'
import { Box, Breadcrumbs, Button, Divider, Grid, IconButton, Link, Paper, Stack, TextField, Typography } from '@mui/material'
import { BasicNavbar } from '@/app/components/General/BasicNavbar';
import SearchIcon from '@mui/icons-material/Search';
import LayoutSalud from '@/app/layouts/LayoutSalud';
import { Cita } from './interface/cita.interface';

export default function CitasDisponibles() {

    //Available appointments
    const [availableAppointments, setAvailableAppointments] = React.useState<Cita [] | null>(null);


    return (
        <LayoutSalud>
            <p>Citas disponibles</p>
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
                            <Typography variant='h6'>Citas disponibles
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

                                    </Stack>


                                </Grid>

                                <Grid item>
                                    <Button type='submit' variant="contained"
                                        sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Consultar</Button>

                                </Grid>

                            </Grid>



                        </Box>

                        {
                            availableAppointments !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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