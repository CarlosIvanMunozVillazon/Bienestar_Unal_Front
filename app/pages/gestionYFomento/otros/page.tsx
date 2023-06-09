"use client"
import React from 'react'
import {Button, Grid, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import LayoutFomento from '@/app/layouts/LayoutFomento';
import { BaseForm } from '@/app/components/General/BaseForm';
import { formInfoPorCedula } from '@/app/types/salud/servicios/informacion/formsInformacion';
import { falla } from './interface/falla.interface';
import { apiFallaAlimentacion } from '@/app/api/GestionFomento/otros/falla_alimentacion';
import { pbm } from './interface/pbm.interface';
import { apiPbmEstudiante } from '@/app/api/GestionFomento/otros/pbm_estudiante';

export default function Otros() {

    //1.
    const [paramsFallaAlimentaria, setParamsFallaAlimentaria] = React.useState<formInfoPorCedula>({
        cedula : 0
    })

    //2.
    const handleChgFalla = (e : React.ChangeEvent<HTMLInputElement>) => (
        setParamsFallaAlimentaria({
            ...paramsFallaAlimentaria, [e.target.name] : e.target.value
        })
    )

    //3.
    const [fallasAlimentarias, setFallasAlimentarias] = React.useState<falla[] | null> (null);

    //4.
    const handleConsFalla = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        apiFallaAlimentacion.getFallaUserId(paramsFallaAlimentaria.cedula).then((response) => {
            setFallasAlimentarias(response.data)
            console.log(fallasAlimentarias)
        }).catch((Error) => {
            console.log(`${Error} No es posible consultar las fallas.`)
        })
        
    }


    //1.
    const [parPbm, setParPbm] = React.useState<formInfoPorCedula>({
        cedula : 0
    })

    //2.
    const handleChgPbm = (e : React.ChangeEvent<HTMLInputElement>) => (
        setParPbm({
            ...parPbm, [e.target.name] : e.target.value
        })
    )

    //3.
    const [pbm, setPbm] = React.useState<pbm[] | null> (null);

    //4.
    const handleConPBM = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        apiPbmEstudiante.getPbmEstudiante(parPbm.cedula).then((response) => {
            setPbm(response.data)
            console.log(pbm)
        }).catch((Error) => {
            console.log(`${Error} No es posible consultar el PBM.`)
        })
    }   



    return (
        <LayoutFomento>
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
                    
                    <BaseForm title='Fallas de Alimentación'
                        children={
                            <>
                                <TextField name = 'cedula' onChange = {handleChgFalla} placeholder='Cédula' />
                            </>
                        }

                        children2={
                            <Button type='submit' variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>
                        }

                        children3={
                            <>

                            {
                                fallasAlimentarias !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                <Grid container
                                    component="div"
                                    justifyContent="center"
                                    alignItems="center"
                                    direction="row"
                                    spacing={1}
                                    sx={{ height: "100%" }}>

                                    {
                                        // gfFallaAlimentacion!.map(() => (
                                        //     <Grid item xs={3}>

                                        //     </Grid>
                                        // ))

                                    }
                                </Grid>

                            ) : null}
                            </>
                        }
                        submit={handleConsFalla}
                    ></BaseForm>

                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >
                    
                    <BaseForm title='Mi PBM'
                        children={
                            <>
                                <TextField name = 'cedula' onChange={handleChgPbm} placeholder='Cédula' />
                            </>
                        }

                        children2={
                            <Button type='submit' variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>
                        }

                        children3={
                            <>

                            {
                                pbm !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                <Grid container
                                    component="div"
                                    justifyContent="center"
                                    alignItems="center"
                                    direction="row"
                                    spacing={1}
                                    sx={{ height: "100%" }}>

                                    {
                                        // gfPBM!.map((convocatoria) => (
                                        //     <Grid item xs={3}>

                                        //     </Grid>
                                        // ))

                                    }
                                </Grid>

                            ) : null}
                            </>
                        }
                        submit={handleConPBM}
                    ></BaseForm>

                </Grid>

            </Grid>
        </LayoutFomento>
    )
}