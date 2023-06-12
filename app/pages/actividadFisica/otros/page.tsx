"use client"

import React from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import { BaseForm } from '@/app/components/General/BaseForm';
import { TorneoInterno } from './interface/torneosInternos.interface';
import { Proyecto } from './interface/proyecto.interface';
import { apiTorneosInternos } from '@/app/api/Deporte/otros/torneosInternos';
import { formConsultarEventoTaller, formProyectos } from '@/app/types/Deporte/otros/formOtros';
import { taller_evento_proyecto } from './interface/taller_evento_proyecto.interface';
import { apiEventoTaller } from '@/app/api/Deporte/otros/eventoTaller';
import { apiProyectos } from '@/app/api/Deporte/otros/proyectos';
import LayoutDeporte from '@/app/layouts/LayoutDeporte';
import { formConsultarPorPrograma } from '@/app/types/Deporte/convocatorias/formConvDeporte';
import { EventoTaller } from './interface/eventoTaller.interface';
import { apiEveTaPrograma } from '@/app/api/Deporte/otros/eventoTallerPrograma';

export default function Otros() {

    //Torneos Internos:
    //1.
    const [torneos, setTorneos] = React.useState<TorneoInterno[] | null>(null);

    //2.
    const handleTorneos = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        apiTorneosInternos.getTorneos().then((response) => {
            setTorneos(response.data);
            console.log(torneos)
        }).catch((Error) => {
            console.log(`${Error} No es posible consultar torneos internos.`)
        })
    }


    //Eventos y Talleres: info sobre el evento taller.
    //1.
    const [parEveta, setParEveta] = React.useState<formConsultarEventoTaller>({

        id_eve_ta: 0
    })

    //2.
    const handleChgEveta = (e: React.ChangeEvent<HTMLInputElement>) => {

        setParEveta({
            ...parEveta, [e.target.name]: e.target.value
        })
    }

    //3. //VERIFICAR
    const [eventosTalleres, setEventosTalleres] = React.useState<EventoTaller[] | null>(null);

    //4.
    const handleEveta = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        apiEventoTaller.getEventoTaller(parEveta.id_eve_ta).then((response) => {
            setEventosTalleres(response.data);
            console.log(eventosTalleres)
        }).catch((Error) => {
            console.log(`${Error} No es posible el evento deseado.`)
        })
    }


    //Proyectos.
    //1.
    const [parProyectos, setParProyectos] = React.useState<formProyectos>({
        idProyecto: 0
    })

    //2.
    const handleChgProyectos = (e: React.ChangeEvent<HTMLInputElement>) => {

        setParProyectos({
            ...parProyectos, [e.target.name]: e.target.value
        })
    }

    //3.
    const [proyectos, setProyectos] = React.useState<Proyecto[] | null>(null);

    //4.    
    const handleProyectos = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        apiProyectos.getProyectos(parProyectos.idProyecto).then((response) => {
            setProyectos(response.data);
            console.log(proyectos)
        }).catch((Error) => {
            console.log(`${Error} Imposible consultar proyectos.`)
        })
    }


    //Eventos y talleres por programa: eventoTallerPrograma
    //1.
    const [parEvetaPrograma, setParEvetaPrograma] = React.useState<formConsultarPorPrograma>({
        id_programa: 0
    })

    //2.
    const handleChgPrograma2 = (e: React.ChangeEvent<HTMLInputElement>) => {

        setParEvetaPrograma({
            ...parEvetaPrograma, [e.target.name]: e.target.value
        })
    }

    //3.
    const [evetetaPrograma, setEvetaPrograma] = React.useState<taller_evento_proyecto[] | null>(null);

    //4.
    const handleEventosYTalleres = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        apiEveTaPrograma.getEvetaPrograma(parEvetaPrograma.id_programa).then((response) => {
            setEvetaPrograma(response.data);
        }).catch((Error) => {
            console.log(`${Error} No hay eventos y talleres disponibles.`)
        })
    }
    // -- Proyectos de prueba: y su programa correspondiente
    // -- 500 1701, 517 1705, 504 1702

    // Programa de prueba: 
    // 1705

    // -- Eventos y talleres de prueba: y su programa correspondiente
    // -- 519 1705, 503 1701, 515 1704 

    // Para ver convocatorias
    // 1702 1703

    // Cedulas pa agregar convs:
    // 101010122
    // 10101015
    // 10101011
    // 101010110

    //Convocatorias de prueba:
    //219
    //216
    //212

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

                    <BaseForm title='' children={
                        <Typography variant='h6'>Torneos Internos
                        </Typography>
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Orange" }} endIcon={<SearchIcon />}>Consultar</Button>}

                        children3={<>
                            {torneos !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                        </>} submit={handleTorneos}
                    ></BaseForm>

                </Grid>



                <Grid item
                    sx={{ width: '75%' }}
                >

                    <BaseForm title='Información Eventos y Talleres' children={
                        <TextField name='id_eve_ta' onChange={handleChgEveta} placeholder='id EventoTaller' />
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Orange" }} endIcon={<SearchIcon />}>Consultar</Button>}

                        children3={<>
                            {eventosTalleres !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                        </>} submit={handleEveta}
                    ></BaseForm>


                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >

                    <BaseForm title='Consultar proyectos' children={
                        <TextField name='idProyecto' onChange={handleChgProyectos} placeholder='id Proyecto' />
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Orange" }} endIcon={<SearchIcon />}>Consultar</Button>}

                        children3={<>
                            {proyectos !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                        </>} submit={handleProyectos}
                    ></BaseForm>


                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >

                    <BaseForm title='Consultar eventos y talleres por programa' children={
                        <TextField name='id_programa' onChange={handleChgPrograma2} placeholder='id Programa' />
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Orange" }} endIcon={<SearchIcon />}>Consultar</Button>}

                        children3={<>
                            {evetetaPrograma !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                        </>} submit={handleEventosYTalleres}
                    ></BaseForm>


                </Grid>
            </Grid>




        </LayoutDeporte>
    )
}