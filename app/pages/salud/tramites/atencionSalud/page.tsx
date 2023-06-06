"use client"

import React from 'react'
import { Box, Breadcrumbs, Button, Divider, Grid, IconButton, Link, Paper, Stack, TextField, Typography } from '@mui/material'
import { BasicNavbar } from '@/app/components/General/BasicNavbar';
import LayoutSalud from '@/app/layouts/LayoutSalud';
import SearchIcon from '@mui/icons-material/Search';
import { BaseForm } from '@/app/components/General/BaseForm';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


export default function AtencionSalud() {


    const [agregar_atencion_en_salud, set_agregar_atencion_en_salud] = React.useState(null);
    const [estado_atencion, set_estado_atencion] = React.useState(null);
    const [modificarAtenciones, setmodificarAtenciones] = React.useState(null);


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
            <p>consultar, añadir, modificar AtencionSalud</p>
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
                    <BaseForm title='Estado Atención' children={
                        <TextField placeholder='Cédula' />
                    }
                        children2={
                            <Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Consultar</Button>

                        }

                        children3={
                            <>
                                {
                                    estado_atencion !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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
                    <BaseForm title='Agregar Atención' children={
                        <>
                            <TextField placeholder='Cédula' />

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker format="YYYY/MM/DD" />
                            </LocalizationProvider>

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

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker format="YYYY/MM/DD" />
                            </LocalizationProvider>

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