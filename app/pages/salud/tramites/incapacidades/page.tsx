"use client"

import React from 'react'
import { Box, Breadcrumbs, Button, Divider, Grid, IconButton, Link, Paper, Stack, TextField, Typography } from '@mui/material'
import { BasicNavbar } from '@/app/components/General/BasicNavbar';
import LayoutSalud from '@/app/layouts/LayoutSalud';
import SearchIcon from '@mui/icons-material/Search';
import { BaseForm } from '@/app/components/General/BaseForm';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


export default function Incapacidades() {

    
    const [get_estado_incapacidad, set_get_estado_incapacidad] = React.useState(null);
    const [agregar_incapacidad, set_agregar_incapacidad] = React.useState(null);
    const [modificar_incapacidad, set_modificar_incapacidad] = React.useState(null);

    const hanldeSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const hanldeSubmit2 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const hanldeSubmit3 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <LayoutSalud>
            <p>estado incapacidad get con solo el id del usuario</p>
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
                    <BaseForm title='Estado Incapacidad' children={
                        <TextField placeholder='Cédula' />
                    }
                        children2={
                            <Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Consultar</Button>

                        }

                        children3={
                            <>
                                {
                                    get_estado_incapacidad !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                        submit={hanldeSubmit1}
                    ></BaseForm>

                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >
                    <BaseForm title='Agregar Incapacidad' children={
                        <>
                            <TextField placeholder='Cédula' />

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker format="YYYY-MM-DD" />
                            </LocalizationProvider>

                            <TextField placeholder='Enfermedad' />

                            <TextField placeholder='Días' />
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
                    <BaseForm title='Modificar Incapacidad' children={
                        <>
                            <TextField placeholder='id Incapacidad' />

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker format="YYYY-MM-DD" />
                            </LocalizationProvider>


                            <TextField placeholder='Enfermedad' />
                            <TextField placeholder='Días' />
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
        </LayoutSalud>
    )
}