"use client"

import LayoutMain from '@/app/layouts/LayoutMain';
import { Grid, Typography, Button, TextField, Divider, IconButton, Link } from "@mui/material";
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { BaseForm } from "@/app/components/General/BaseForm";
import { form_est_toma_conv, form_info_conv } from '@/app/types/General/general';
import { info_conv } from './interface/info_conv.interface';
import { apiPrograma_area_convocatoria } from '@/app/api/General/programa_area_convocatoria';
import { apiEst_toma_conv } from '@/app/api/General/est_toma_conv';
import { BasicNavbar } from '@/app/components/General/BasicNavbar';




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
                        <BaseForm title='Inscribase a una convocatoria' children={
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

                <Grid item sx={{ width: '75%' }} container justifyContent="center" alignItems="center">
                    <img src="data:image/png;base64,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" alt="Bienestar_img" />
                </Grid>
            </Grid>
        </LayoutMain>
    )
}