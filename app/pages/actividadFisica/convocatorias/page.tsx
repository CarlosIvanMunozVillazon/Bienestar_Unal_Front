"use client"

import { Button, Grid, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import LayoutDeporte from '@/app/layouts/LayoutDeporte';
import { BaseForm } from '@/app/components/General/BaseForm';
import { CursoLibre } from './interface/cursosLibres.interface';
import { ConvocatoriasUsuario } from './interface/convocatoriasUsuario.interface';
import { formConsultarPorPrograma, formParticiparConv } from '@/app/types/Deporte/convocatorias/formConvDeporte';
import { apiParticiparConvocatoria } from '@/app/api/Deporte/Convocatorias/participarConvocatoria';
import { formInfoPorCedula } from '@/app/types/salud/servicios/informacion/formsInformacion';
import { apiCursosLibres } from '@/app/api/Deporte/Convocatorias/cursosLibres';
import { apiMisConvocatorias } from '@/app/api/Deporte/Convocatorias/misConvocatorias';
import { apiConvsDeporte } from '@/app/api/Deporte/Convocatorias/convocatoriaPrograma';
import { convocatorias_deporte } from './interface/convocatorias_deporte.interface';

export default function Convocatorias() {

    //Participar Convocatorias
    //1. 
    const [parParticiparConv, setParParticiparConv] = React.useState<formParticiparConv>(
        {
            cedula: 0,
            id_conv: 0,
            fecha: ''
        }
    )

    //2.
    const hanldeChgParticipar = (e: React.ChangeEvent<HTMLInputElement>) => {

        setParParticiparConv({

            ...parParticiparConv, [e.target.name]: e.target.value
        })
    }

    //3.
    const handleParticipar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        apiParticiparConvocatoria.postParticiparConvocatoria(parParticiparConv.cedula, parParticiparConv.id_conv, parParticiparConv.fecha).then((response) => {
            console.log(response.data)
        }).catch((Error) => {
            console.log(Error)
        })
    }


    //Mis convocatorias.
    //1.
    const [consMisConvs, setConsMisConvs] = React.useState<formInfoPorCedula>({
        cedula: 0
    })

    //2.
    const handleChgMisConvs = (e: React.ChangeEvent<HTMLInputElement>) => {

        setConsMisConvs({
            ...consMisConvs, [e.target.name]: e.target.value
        })
    }

    //3.
    const [misConvocatorias, setMisConvocatorias] = React.useState<ConvocatoriasUsuario[] | null>(null);

    //4.
    const handleMisConvs = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        apiMisConvocatorias.getMisConvocatorias(parParticiparConv.cedula).then((response) => {
            setMisConvocatorias(response.data);
            console.log(misConvocatorias)
        }).catch((Error) => {
            console.log(Error)
        })
    }


    //Convocatorias por programa:
    //1.
    const [parConsConvPrograma, setparConsConvPrograma] = React.useState<formConsultarPorPrograma>({
        id_programa: 0
    })

    //2.
    const handleChgConvPrograma = (e: React.ChangeEvent<HTMLInputElement>) => {

        setparConsConvPrograma({
            ...parConsConvPrograma, [e.target.name]: e.target.value
        })
    }

    //3.
    const [convsPorPrograma, setConvsPorPrograma] = React.useState<convocatorias_deporte[] | null>(null);

    //4.
    const handleConvsPrograma = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        apiConvsDeporte.getConvPrograma(parConsConvPrograma.id_programa).then((response) => {
            setConvsPorPrograma(response.data);
            console.log(convsPorPrograma)
        }).catch((Error) => {
            console.log(`${Error} No es posible traer convocatorias por programa.`)
        })
    }


    //ConsultarCursosLibres:
    const [convCursosLibres, setCursosLibres] = React.useState<CursoLibre[] | null>(null);

    const handleSubmit4 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        apiCursosLibres.getCursosLibres().then((response) => {
            setCursosLibres(response.data);
        }).catch((Error) => {
            console.log(`${Error} No es posible ver cursos libres.`)
        })
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
                    sx={{ width: '75%' }}>
                    {/*AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */}
                    <BaseForm title='Participar en convocatoria' children={
                        <>
                            <TextField name='cedula' onChange={hanldeChgParticipar} placeholder='Cédula'></TextField>
                            <TextField name='id_conv' onChange={hanldeChgParticipar} placeholder='id Convocatoria'></TextField>
                            <TextField name='fecha' onChange={hanldeChgParticipar} placeholder='Fecha Inscripción'></TextField>

                        </>
                    }
                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Orange" }} endIcon={<SearchIcon />}>Participar</Button>}

                        children3={<>
                            {/* {participarConv !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                            ) : null} */}

                        </>} submit={handleParticipar}
                    ></BaseForm>

                </Grid>
                <Grid item
                    sx={{ width: '75%' }}>

                    <BaseForm title='Mis convocatorias' children={
                        <TextField name='cedula' onChange={handleChgMisConvs} placeholder='Cédula' />
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Orange" }} endIcon={<SearchIcon />}>Consultar</Button>}

                        children3={<>
                            {misConvocatorias !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                <Grid container
                                    component="div"
                                    justifyContent="center"
                                    alignItems="center"
                                    direction="row"
                                    spacing={1}
                                    sx={{ height: "100%", mt: 3 }}>

                                    <Grid item xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            ID
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            CC
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            PROGRAMA
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            NOMBRE
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            APERTURA
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            CIERRE
                                        </Typography>
                                    </Grid>

                                    {
                                        misConvocatorias!.map((convocatoria) => (
                                            <>
                                                <Grid item key = {convocatoria.key} xs={2}>
                                                    {convocatoria.conv_id}
                                                </Grid>
                                                <Grid item key = {convocatoria.key + 1} xs={2}>
                                                    {convocatoria.estID}
                                                </Grid>

                                                <Grid item key = {convocatoria.key + 2} xs={2}>
                                                    {convocatoria.Programa_progID}
                                                </Grid>
                                                <Grid item key = {convocatoria.key + 3} xs={2}>
                                                    {convocatoria.convNombre}
                                                </Grid>

                                                <Grid item key = {convocatoria.key + 4} xs={2}>
                                                    {convocatoria.convFechaApertura}
                                                </Grid>
                                                <Grid item key = {convocatoria.key + 5} xs={2}>
                                                    {convocatoria.convFechaCierre}
                                                </Grid>
                                            </>
                                        ))
                                    }
                                </Grid>

                            ) : <p>No tienes convocatorias.</p>}

                        </>} submit={handleMisConvs}
                    ></BaseForm>


                </Grid>

                <Grid item
                    sx={{ width: '75%' }}>

                    <BaseForm title='Convocatorias por programa deportes' children={
                        <TextField name='id_programa' onChange={handleChgConvPrograma} placeholder='id Programa' />
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Orange" }} endIcon={<SearchIcon />}>Consultar</Button>}

                        children3={<>
                            {convsPorPrograma !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                <Grid container
                                    component="div"
                                    justifyContent="center"
                                    alignItems="center"
                                    direction="row"
                                    spacing={1}
                                    sx={{ height: "100%", mt: 3 }}>

                                    <Grid item xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            ID
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2} sx={{ bgcolor: "lightgray" }} >
                                        <Typography variant='body1'>
                                            NOMBRE
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            APERTURA
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            CIERRE
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            ESTADO
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={2} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            PAPA
                                        </Typography>
                                    </Grid>

                                    {
                                        convsPorPrograma!.map((convocatoria) => (
                                            <>
                                                <Grid key={convocatoria.conv_id} item xs={2}>
                                                    {convocatoria.conv_id}
                                                </Grid>

                                                <Grid key={convocatoria.conv_id + 1} item xs={2}>
                                                    {convocatoria.convNombre}
                                                </Grid>

                                                <Grid key={convocatoria.conv_id + 2} item xs={2}>
                                                    {convocatoria.convFechaApertura}
                                                </Grid>

                                                <Grid key={convocatoria.conv_id + 3} item xs={2}>
                                                    {convocatoria.convFechaCierre}
                                                </Grid>

                                                <Grid key={convocatoria.conv_id + 3} item xs={2}>
                                                    {convocatoria.convEstado}
                                                </Grid>

                                                <Grid key={convocatoria.conv_id + 3} item xs={2}>
                                                    {convocatoria.convPAPA}
                                                </Grid>
                                            </>
                                        ))
                                    }
                                </Grid>
                            ) : <p>No hay convocatorias disponibles.</p>}
                        </>} submit={handleConvsPrograma}
                    ></BaseForm>
                </Grid>

                <Grid item
                    sx={{ width: '75%' }}>

                    <BaseForm title='' children={
                        <Typography variant='h6'>Convocatorias Cursos Libres</Typography>
                    }

                        children2={<Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Orange" }} endIcon={<SearchIcon />}>Consultar</Button>}

                        children3={<>
                            {convCursosLibres !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                <Grid container
                                    component="div"
                                    justifyContent="center"
                                    alignItems="center"
                                    direction="row"
                                    spacing={1}
                                    sx={{ height: "100%", mt: 3 }}>

                                    <Grid item xs={3} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            ID
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} sx={{ bgcolor: "lightgray" }} >
                                        <Typography variant='body1'>
                                            NOMBRE
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            TIPO DE CURSO
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={3} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            CONDICIÓN
                                        </Typography>
                                    </Grid>

                                    {
                                        convCursosLibres!.map((curso) => (
                                            <>
                                                <Grid key={curso.key} item xs={3}>
                                                    {curso.Convocatoria_conv_id}
                                                </Grid>

                                                <Grid key={curso.key + 1} item xs={3}>
                                                    {curso.curNombre}
                                                </Grid>

                                                <Grid key={curso.key + 2} item xs={3}>
                                                    {curso.curTipoCurso}
                                                </Grid>
                                                <Grid key={curso.key + 2} item xs={3}>
                                                    {curso.curCondicion}
                                                </Grid>
                                            </>

                                        ))
                                    }
                                </Grid>

                            ) : <p>No hay cursos disponibles.</p>}

                        </>} submit={handleSubmit4}
                    ></BaseForm>
                </Grid>
            </Grid>
        </LayoutDeporte >
    )
}