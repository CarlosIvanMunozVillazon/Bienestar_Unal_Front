"use client"
import BasicLayout from '@/app/layouts/BasicLayout'
import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

import RestaurantIcon from '@mui/icons-material/Restaurant';
import PaidIcon from '@mui/icons-material/Paid';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import WorkIcon from '@mui/icons-material/Work';
import LayoutFomento from '@/app/layouts/LayoutFomento';
import LayoutDeporte from '@/app/layouts/LayoutDeporte';
import { BaseForm } from '@/app/components/General/BaseForm';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs/AdapterDayjs';
import { CursoLibre } from './interface/cursosLibres.interface';
import { ConvocatoriasUsuario } from './interface/convocatoriasUsuario.interface';

export default function Convocatorias() {
    // #CONVOCATORIAS
    // # 4. Un estudiante quiere participar en una convocatoria
    // 	pas_participar_convocatoria(in ccEstudiante int, in idConv int, in fechaInscripcion date)

    // # 5. Un estudiante quiere consultar las convocatorias en las que participa
    // 	sp_consultar_mis_convocatorias (in cedula int)

    // # 7. Se requiere consultar las convocatorias que hay por programa de deporte.
    // 	sp_consultar_convocatorias_deporte(in idPrograma int) usar id's programas de deportes

    // # 2. Un usuario necesita ver los cursos libres de deportes disponibles
    // 	sp_consultar_convocatoria_cursos_libres()

    const [participarConv, setparticiparConv] = React.useState(null);
    const [misConvs, setmisConvs] = React.useState(null);
    const [convsProgramas, setconvsProgramas] = React.useState(null);
    const [convCurLibre, setEvetaPrograma] = React.useState(null);

    const handleSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //endpoint function here
    }

    const handleSubmit2 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //endpoint function here
    }

    const handleSubmit3 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //endpoint function here
    }

    const handleSubmit4 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //endpoint function here
    }

    return (
        <LayoutDeporte>
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

                    <BaseForm title='Participar en convocatoria' children={
                        <>
                            <TextField placeholder='Cédula'></TextField>
                            <TextField placeholder='id Convocatoria'></TextField>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker format='YYYY-MM-DD' label='Fecha Inscripción' />
                            </LocalizationProvider>
                        </>


                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Orange" }} endIcon={<SearchIcon />}>Participar</Button>}

                        children3={<>
                            {participarConv !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                        </>} submit={handleSubmit1}
                    ></BaseForm>

                </Grid>



                <Grid item
                    sx={{ width: '75%' }}
                >

                    <BaseForm title='Mis convocatorias' children={
                        <TextField placeholder='Cédula' />
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Orange" }} endIcon={<SearchIcon />}>Consultar</Button>}

                        children3={<>
                            {misConvs !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                        </>} submit={handleSubmit2}
                    ></BaseForm>


                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >

                    <BaseForm title='Convocatorias por programa deportes' children={
                        <TextField placeholder='id Programa' />
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Orange" }} endIcon={<SearchIcon />}>Consultar</Button>}

                        children3={<>
                            {convsProgramas !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                        </>} submit={handleSubmit3}
                    ></BaseForm>


                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >

                    <BaseForm title='' children={
                        <Typography variant='h6'>Convocatorias Cursos Libres</Typography>
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Orange" }} endIcon={<SearchIcon />}>Consultar</Button>}

                        children3={<>
                            {convCurLibre !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                        </>} submit={handleSubmit4}
                    ></BaseForm>


                </Grid>
            </Grid>


        </LayoutDeporte >
    )
}