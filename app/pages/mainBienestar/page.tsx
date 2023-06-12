"use client"

import LayoutMain from '@/app/layouts/LayoutMain';
import { Grid, Typography, Button, TextField } from "@mui/material";
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { BaseForm } from "@/app/components/General/BaseForm";
import { form_est_toma_conv, form_info_conv } from '@/app/types/General/general';
import { info_conv } from './interface/info_conv.interface';
import { apiPrograma_area_convocatoria } from '@/app/api/General/programa_area_convocatoria';
import { apiEst_toma_conv } from '@/app/api/General/est_toma_conv';



export default function BienestarDash() {
    
    //Info Convocatoria
    const [params_info_conv, set_params_info_conv] = React.useState<form_info_conv>({
        conv_id: 1,
    });
    const [result_info_conv, set_result_info_conv] = React.useState<info_conv[] | null>(null);

    //Estudiante toma convocatoria
    const [params_est_toma_conv, set_params_est_toma_conv] = React.useState<form_est_toma_conv>({
        cedula : 1,
        conv_id: 1,
        fecha: '2023-01-01'
    });


    //Guardado de datos de formularios
    const valueInfoConv = (e: React.ChangeEvent<HTMLInputElement>) => {
        set_params_info_conv({
            ...params_info_conv, [e.target.name]:e.target.value
        })
    }

    //
    const valueEstTomaConv = (e: React.ChangeEvent<HTMLInputElement>) => {
        set_params_est_toma_conv({
            ...params_est_toma_conv, [e.target.name]:e.target.value
        })
    }
    
    //Consumidores de API
    const handle_info_conv = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        apiPrograma_area_convocatoria.get_programa_area_convocatoria(
            params_info_conv.conv_id
        ).then((response) => {
            set_result_info_conv(response.data)
            console.log(result_info_conv)
        }).catch((error) => {
            console.log(`${error}: No hay información de la convocatoria ingresada`)
        })
    }

    //
    const handle_est_toma_conv = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        apiEst_toma_conv.post_est_toma_conv(
            params_est_toma_conv.cedula, params_est_toma_conv.conv_id, params_est_toma_conv.fecha
        ).then((response) => {
            console.log('El estudiante se inscribió a la convocatoria exitosamente')
        }).catch((error) => {
            console.log(`${error}: El estudiante no pudo inscribirse a la convocatoria`)
        })
    }

    return (

        <LayoutMain>

            <br />

            <Grid container
                component="div"
                alignItems="center"
                justifyContent="center"
                direction="column"
                sx={{ width: "100%", mt: 1 }}
                spacing={2}
                maxHeight="xl">
                

                <Grid item sx={{ width: '75%' }}>
                        <BaseForm title='Información Convocatoria' children={
                            <>
                                <TextField name='conv_id' onChange={valueInfoConv} placeholder='ID Convocatoria' />
                            </>
                        }

                            children2={<Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Consultar</Button>}

                            children3={<>
                                {/*infoConvocatoria !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                                ) : null*/}
                            </>} submit={handle_info_conv}
                        ></BaseForm>
                </Grid>

                <Grid item sx={{ width: '75%' }} >
                        <BaseForm title='Inscribíase a una convocatoria' children={
                            <>
                                <TextField name='usuario_id' onChange={valueEstTomaConv} placeholder='Cédula' />
                                <TextField name='conv_id' onChange={valueEstTomaConv} placeholder='ID Convocatoria' />
                                <TextField name='fecha' onChange={valueEstTomaConv} placeholder='Fecha' />
                            </>
                        }

                            children2={<Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Inscribirme</Button>}

                            children3={<>
                                {/*est_toma_conv !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

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

                                ) : null*/}
                            </>} submit={handle_est_toma_conv}
                        ></BaseForm>
                </Grid>
            </Grid>
        </LayoutMain>
    )
}