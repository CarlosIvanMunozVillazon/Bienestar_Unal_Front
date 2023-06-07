"use client"
import BasicLayout from '@/app/layouts/BasicLayout'
import { Autocomplete, AutocompleteRenderInputParams, Box, Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

import RestaurantIcon from '@mui/icons-material/Restaurant';
import PaidIcon from '@mui/icons-material/Paid';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import WorkIcon from '@mui/icons-material/Work';
import LayoutFomento from '@/app/layouts/LayoutFomento';
import { convocatoriaEmprendimiento } from './interface/emprendimiento.interface';
import { BaseForm } from '@/app/components/General/BaseForm';

export default function Convocatorias() {

    //puros gets pa la API
    //Tarea 1:
    const [cgfEmprendimiento, setcgfEmprendimiento] = React.useState<convocatoriaEmprendimiento[] | null>(null)
    const [cgfAlimentaria, setcgfAlimentaria] = React.useState<convocatoriaEmprendimiento[] | null>(null)
    const [cgfAlojamiento, setcgfAlojamiento] = React.useState<convocatoriaEmprendimiento[] | null>(null)
    const [cgfEconomica, setcgfEconomica] = React.useState<convocatoriaEmprendimiento[] | null>(null)
    const [cgfTransporte, setcgTransporte] = React.useState<convocatoriaEmprendimiento[] | null>(null)


    const handleSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //call endpoint function
    }

    return (
        <LayoutFomento>
            <br />
            <p>5 componentes de consulta y resultados para las convocatorias</p>


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


                    <BaseForm title='Convocatoria Fomento emprendimiento'
                        children={
                            <>
                                <TextField placeholder='Cédula' />
                                <TextField placeholder='Tema emprendimiento' />
                            </>

                        }

                        children2={
                            <Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>
                        }

                        children3={
                            <>

                                {
                                    cgfEmprendimiento !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                        <Grid container
                                            component="div"
                                            justifyContent="center"
                                            alignItems="center"
                                            direction="row"
                                            spacing={1}
                                            sx={{ height: "100%" }}>

                                            {
                                                cgfEmprendimiento!.map((convocatoria) => (
                                                    <Grid item xs={3}>

                                                    </Grid>
                                                ))

                                            }
                                        </Grid>

                                    ) : null}
                            </>
                        }
                        submit={handleSubmit1}
                    ></BaseForm>




                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >
                    {/*Convocatorias de:  gestión alimentaria*/}
                    {/*Parámetros : cédula de estudiante, comida (lista desplegable), lugar (lista desplegable) */}


                    <BaseForm title='Convocatoria Gestión Alimentaria'
                        children={
                            <>
                                <TextField placeholder='Cédula' />
                                <Autocomplete sx={{ width: 205 }} options={['Desayuno', 'Almuerzo', 'Cena']} renderInput={(params) => <TextField {...params} label='comida' />} />

                                <Autocomplete sx={{ width: 205 }} options={['Comedor central', 'Hemeroteca', 'Odontología', 'Agronomía', 'Biología', 'Ciencias Humanas',
                                    'Ciencias Económicas', 'Matemáticas', 'otro']} renderInput={(params) => <TextField {...params} label='Lugar' />} />
                            </>

                        }

                        children2={
                            <Button type='submit' variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>
                        }

                        children3={
                            <>

{
                            cgfEmprendimiento !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                <Grid container
                                    component="div"
                                    justifyContent="center"
                                    alignItems="center"
                                    direction="row"
                                    spacing={1}
                                    sx={{ height: "100%" }}>

                                    {
                                        cgfEmprendimiento!.map((convocatoria) => (
                                            <Grid item xs={3}>

                                            </Grid>
                                        ))

                                    }
                                </Grid>

                            ) : null}
                            </>
                        }
                        submit={handleSubmit1}
                    ></BaseForm>


                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >
                    {/*Convocatorias de:  gestión alojamiento*/}
                    {/*Parámetros : cédula de estudiante, localidad, tipo (lista desplegable), */}


                    <Paper>
                        <Box component='form'
                            sx={{ width: '100%' }}
                        >
                            <Typography variant='h6'>Convocatoria Gestión Alojamiento
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
                                        <TextField placeholder='Localidad' />
                                        <Autocomplete sx={{ width: 205 }} options={['Hotel', 'Casa', 'Apartamento', 'Vivienda familiar', 'Residencia Universitaria',
                                            'Apartaestudio', 'Habitación', 'otro']} renderInput={(params) => <TextField {...params} label='Tipo' />} />



                                    </Stack>


                                </Grid>

                                <Grid item>
                                    <Button type='submit' variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>

                                </Grid>

                            </Grid>


                        </Box>

                        {
                            cgfEmprendimiento !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                <Grid container
                                    component="div"
                                    justifyContent="center"
                                    alignItems="center"
                                    direction="row"
                                    spacing={1}
                                    sx={{ height: "100%" }}>

                                    {
                                        cgfEmprendimiento!.map((convocatoria) => (
                                            <Grid item xs={3}>

                                            </Grid>
                                        ))

                                    }
                                </Grid>

                            ) : null}
                    </Paper>



                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >

                    {/*Convocatorias de:  gestión económica*/}
                    {/*Parámetros : cédula de estudiante*/}


                    <Paper>
                        <Box component='form'
                            sx={{ width: '100%' }}
                        >
                            <Typography variant='h6'>Convocatoria Gestión Económica
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
                                    <Button type='submit' variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>

                                </Grid>

                            </Grid>

                        </Box>

                        {
                            cgfEmprendimiento !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                <Grid container
                                    component="div"
                                    justifyContent="center"
                                    alignItems="center"
                                    direction="row"
                                    spacing={1}
                                    sx={{ height: "100%" }}>

                                    {
                                        cgfEmprendimiento!.map((convocatoria) => (
                                            <Grid item xs={3}>

                                            </Grid>
                                        ))

                                    }
                                </Grid>

                            ) : null}
                    </Paper>



                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >

                    {/*Convocatorias de:  gestión de transporte*/}
                    {/*Parámetros : cédula estudiante, tipo transporte (lista desplegable)*/}


                    <Paper>
                        <Box component='form'
                            sx={{ width: '100%' }}
                        >
                            <Typography variant='h6'>Convocatoria Gestión Transporte
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

                                        <Autocomplete sx={{ width: 205 }} options={['Transporte público masivo', 'otro']} renderInput={(params) => <TextField {...params} label='Tipo' />} />


                                    </Stack>


                                </Grid>

                                <Grid item>
                                    <Button type='submit' variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>

                                </Grid>

                            </Grid>

                        </Box>

                        {
                            cgfEmprendimiento !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                <Grid container
                                    component="div"
                                    justifyContent="center"
                                    alignItems="center"
                                    direction="row"
                                    spacing={1}
                                    sx={{ height: "100%" }}>

                                    {
                                        cgfEmprendimiento!.map((convocatoria) => (
                                            <Grid item xs={3}>

                                            </Grid>
                                        ))

                                    }
                                </Grid>

                            ) : null}
                    </Paper>



                </Grid>

            </Grid>




        </LayoutFomento>
    )
}

