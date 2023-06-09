"use client"

import React from 'react'
import { Button, Grid, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { BaseForm } from '@/app/components/General/BaseForm';
import LayoutSalud from '@/app/layouts/LayoutSalud';
import { PerfilRiesgo } from './interface/perfilRiesgo.interface';
import { formInfoPorCedula } from '@/app/types/salud/servicios/informacion/formsInformacion';
import { apiPerfilDeRiesgo } from '@/app/api/Salud/tramites/miPerfildeRiesgo/select_perfilriesgo';


export default function MiPerfildeRiesgo() {


    //1.
    const [paramsPerfilDeRiesgo, setParamsPerfilDeRiesgo] = React.useState<formInfoPorCedula> ({
        cedula : 0
    })

    //2.
    const handleChg = (e : React.ChangeEvent <HTMLInputElement>) => {
        setParamsPerfilDeRiesgo({
            ...paramsPerfilDeRiesgo, [e.target.name] : e.target.value
        })
    }

    //3.
    const [datosPerfilDeRiesgo, setDatosPerfilDeRiesgo] = React.useState<PerfilRiesgo[] | null> (null);

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
    
    //Consultar perfil de riesgo usa ***GET***
    //Parámetros : user_id : number
    const [get_perfilDeRiesgo, setperfilDeRiesgo] = React.useState(null);


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
                        <TextField name = 'cedula' onChange={handleChg} placeholder='Cédula' />
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

                        submit={handleConsulaPerfil}
                    ></BaseForm>

                </Grid>

            </Grid>
        </LayoutSalud>
    )
}