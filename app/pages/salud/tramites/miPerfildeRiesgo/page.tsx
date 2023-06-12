"use client"

import React from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { BaseForm } from '@/app/components/General/BaseForm';
import LayoutSalud from '@/app/layouts/LayoutSalud';
import { PerfilRiesgo } from './interface/perfilRiesgo.interface';
import { formInfoPorCedula } from '@/app/types/salud/servicios/informacion/formsInformacion';
import { apiPerfilDeRiesgo } from '@/app/api/Salud/tramites/miPerfildeRiesgo/select_perfilriesgo';


export default function MiPerfildeRiesgo() {


    //1.
    const [paramsPerfilDeRiesgo, setParamsPerfilDeRiesgo] = React.useState<formInfoPorCedula>({
        cedula: 0
    })

    //2.
    const handleChg = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParamsPerfilDeRiesgo({
            ...paramsPerfilDeRiesgo, [e.target.name]: e.target.value
        })
    }

    //3.
    const [datosPerfilDeRiesgo, setDatosPerfilDeRiesgo] = React.useState<PerfilRiesgo[] | null>(null);

    //4. 
    const handleConsulaPerfil = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        apiPerfilDeRiesgo.getPerfilDeRiesgo(paramsPerfilDeRiesgo.cedula).then((response) => {
            setDatosPerfilDeRiesgo(response.data);
            console.log(datosPerfilDeRiesgo)
        }).catch((Error) => {
            console.log(`${Error} Imposible consultar perfil de riesgo`)
        })
    }


    return (
        <LayoutSalud>
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
                    <BaseForm title='Mi perfil de riesgo' children={
                        <TextField name='cedula' onChange={handleChg} placeholder='Cédula' />
                    }
                        children2={
                            <Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Consultar</Button>

                        }

                        children3={
                            <>
                                {
                                    datosPerfilDeRiesgo !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                        <Grid container
                                            component="div"
                                            justifyContent="center"
                                            alignItems="center"
                                            direction="row"
                                            spacing={1}
                                            sx={{ height: "100%", mt: 3 }}>

                                            <Grid item xs={3} sx={{ bgcolor: "lightgray" }}
                                            >
                                                <Typography variant='body1'>
                                                    FECHA
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3} sx={{ bgcolor: "lightgray" }} >
                                                <Typography variant='body1'>
                                                    PUNTAJE FISICO
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3} sx={{ bgcolor: "lightgray" }}>
                                                <Typography variant='body1'>
                                                    PUNTAJE PSICOLOGICO
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3} sx={{ bgcolor: "lightgray" }}>
                                                <Typography variant='body1'>
                                                    DISCAPACIDAD
                                                </Typography>
                                            </Grid>
                                            {
                                                datosPerfilDeRiesgo!.map((resultado) => (
                                                    <>
                                                        <Grid key={resultado.key} item xs={3}>
                                                            {resultado.fecha}
                                                        </Grid>

                                                        <Grid key={resultado.key + 1} item xs={3}>
                                                            {resultado.puntaje_fisico}
                                                        </Grid>


                                                        <Grid key={resultado.key + 2} item xs={3}>
                                                            {resultado.puntaje_psicologico}
                                                        </Grid>

                                                        <Grid key={resultado.key + 2} item xs={3}>
                                                            {resultado.discapacidad}
                                                        </Grid>
                                                    </>
                                                ))
                                            }

                                        </Grid>

                                    ) : <p>Su perfil de riesgo no está disponible.</p>}
                            </>
                        }

                        submit={handleConsulaPerfil}
                    ></BaseForm>

                </Grid>

            </Grid>
        </LayoutSalud >
    )
}