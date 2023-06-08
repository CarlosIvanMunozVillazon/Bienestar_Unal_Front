"use client"

import React from 'react'
import { Button, Grid, TextField} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search';
import { BaseForm } from '@/app/components/General/BaseForm';
import LayoutSalud from '@/app/layouts/LayoutSalud';


export default function MiPerfildeRiesgo() {

    //Consultar perfil de riesgo usa ***GET***
    //Parámetros : user_id : number
    const [get_perfilDeRiesgo, setperfilDeRiesgo] = React.useState(null);

    const hanldeSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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

                {/*Convocatorias de:  fomento emprendimiento*/}
                {/*Parámetros : cédula de estudiante, y tema de emprendimiento */}

                <Grid item
                    sx={{ width: '75%' }}
                >
                    <BaseForm title='Mi perfil de riesgo' children={
                        <TextField placeholder='Cédula' />
                    }
                        children2={
                            <Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Consultar</Button>

                        }

                        children3={
                            <>
                                {
                                    get_perfilDeRiesgo !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

            </Grid>
        </LayoutSalud>
    )
}