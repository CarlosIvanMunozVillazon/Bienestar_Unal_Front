"use client"

import React from 'react'
import LayoutSalud from '@/app/layouts/LayoutSalud';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Paper, Box, Typography, Stack, TextField, Button } from '@mui/material';

export default function MisCitas() {

    const [myAppointments , setMyAppointments] = React.useState<null>(null);
    //My appointments
    return (
        <LayoutSalud>
            <p>get cuyo path es el id del usuario</p>
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
                            <Typography variant='h6'>Mis Citas
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
                            myAppointments !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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