"use client"
import React from 'react'

import { Button, Grid, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import LayoutFomento from '@/app/layouts/LayoutFomento';
import { convocatoriaEmprendimiento } from './interface/emprendimiento.interface';
import { BaseForm } from '@/app/components/General/BaseForm';
import { convocatoriaAlimento } from './interface/aliementaria.interface';
import { convocatoriaAlojamiento } from './interface/alojamiento.interface';
import { convocatoriaEconomica } from './interface/economica.interface';
import { convocatoriaTransporte } from './interface/transporte.interface';
import {
    convFomentoEmprendimiento,
    convAlimentaria,
    convAlojamiento,
    convEconomica,
    convTransporte,
    est_toma_conv
} from '@/app/types/gestionYFomento/convocatorias/convocatorias';
import { apiCgfEmprendimiento } from '@/app/api/GestionFomento/convocatorias/conv_fomento_emprendimiento';
import { apiCgfAlimentaria } from '@/app/api/GestionFomento/convocatorias/conv_gestion_alimentaria';
import { apiCgfAlojamiento } from '@/app/api/GestionFomento/convocatorias/conv_gestion_alojamiento';
import { apiCgfEconomica } from '@/app/api/GestionFomento/convocatorias/conv_gestion_economica';
import { apiCgfTransporte } from '@/app/api/GestionFomento/convocatorias/conv_gestion_transporte';
import { apiEstudianteTomaConv } from '@/app/api/GestionFomento/convocatorias/estudiante_toma_conv';
import { apiEst_toma_conv } from '@/app/api/General/est_toma_conv';
import { formInfoPorCedula } from '@/app/types/salud/servicios/informacion/formsInformacion';
import { ConvocatoriasUsuario } from '../../actividadFisica/convocatorias/interface/convocatoriasUsuario.interface';
import { apiMisConvocatorias } from '@/app/api/Deporte/Convocatorias/misConvocatorias';
import { response } from './interface/response.interfacte';

export default function Convocatorias() {

    const options_currency2 = { style: 'currency', currency: 'COP' };

    function render_price(price: number) {
        try {
            return price.toLocaleString('es-CO', options_currency2);
        } catch (error) {
            return null;
        }
    }

    // Form data collectors 'state holders'
    const [forEmprendimiento, setForEmprendimiento] = React.useState<convFomentoEmprendimiento>(
        {
            nombre: '',
            tema: ''
        }
    )

    const [forAlimentaria, setForAlimentaria] = React.useState<convAlimentaria>(
        {
            cedula: 0,
            comida: '',
            lugar: ''
        }
    )

    const [forAlojamiento, setForAlojamiento] = React.useState<convAlojamiento>(
        {
            cedula: 0,
            localidad: '',
            tipo: ''
        }
    )

    const [forEconomica, setForEconomica] = React.useState<convEconomica>(
        {
            cedula: 0,
            filter_min: -1,
            filter_max: -1
        }
    )

    const [forTransporte, setForTransporte] = React.useState<convTransporte>(
        {
            cedula: 0,
            tipo: ''
        }
    )

    //Convocatorias Inscritas
    const [params_conv_insc, set_params_conv_insc] = React.useState<formInfoPorCedula>({
        cedula: 0
    })

    //
    const [params_est_toma_conv, set_params_est_toma_conv] = React.useState<est_toma_conv>(
        {
            cedula: 0,
            conv_id: 1,
            fecha: '2023-01-01'
        }
    )


    // API data holders 'state holders'
    const [cgfEmprendimiento, setcgfEmprendimiento] = React.useState<convocatoriaEmprendimiento[] | null>(null)

    const [cgfAlimentaria, setcgfAlimentaria] = React.useState<convocatoriaAlimento[] | null>(null)

    const [cgfAlojamiento, setcgfAlojamiento] = React.useState<convocatoriaAlojamiento[] | null>(null)

    const [cgfEconomica, setcgfEconomica] = React.useState<convocatoriaEconomica[] | null>(null)

    const [cgfTransporte, setcgfTransporte] = React.useState<convocatoriaTransporte[] | null>(null)

    const [result_conv_insc, set_result_conv_insc] = React.useState<ConvocatoriasUsuario[] | null>(null);

    const [result_est_tom_conv, set_result_est_tom_conv] = React.useState<response[] | null>(null);


    // Data setters 'on change handlers'
    const setEmprendimientoData = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setForEmprendimiento(
            {
                ...forEmprendimiento, [e.target.name]: e.target.value
            }
        )
    }

    const setAlimentariaData = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setForAlimentaria(
            {
                ...forAlimentaria, [e.target.name]: e.target.value
            }
        )
    }

    const setAlojamientoData = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setForAlojamiento(
            {
                ...forAlojamiento, [e.target.name]: e.target.value
            }
        )
    }

    const setEconomicaData = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setForEconomica(
            {
                ...forEconomica, [e.target.name]: e.target.value
            }
        )
    }

    const setTransporteData = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setForTransporte(
            {
                ...forTransporte, [e.target.name]: e.target.value
            }
        )
    }

    const valueConvInsc = (e: React.ChangeEvent<HTMLInputElement>) => {
        set_params_conv_insc({
            ...params_conv_insc, [e.target.name]:e.target.value
        })
    }

    const value_est_toma_conv = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        set_params_est_toma_conv(
            {
                ...params_est_toma_conv, [e.target.name]: e.target.value
            }
        )
    }


    // API request performers:
    const handleEmprendimiento = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //call endpoint function
        apiCgfEmprendimiento.getCgfEmprendimiento(forEmprendimiento.nombre, forEmprendimiento.tema).then((response) => {
            setcgfEmprendimiento(response.data)
            console.log(cgfEmprendimiento)
        }).catch((Error) => {
            console.log(Error)
        })
    }

    const handleAlimentaria = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //call endpoint function
        apiCgfAlimentaria.getCgfAlimentaria(
            forAlimentaria.cedula, forAlimentaria.comida, forAlimentaria.lugar).then((response) => {
                setcgfAlimentaria(response.data);
                console.log(cgfAlimentaria)
            }).catch((Error) => {
                console.log(Error)
            })
            forAlimentaria.comida = '';
            forAlimentaria.lugar = '';
    }

    const handleAlojamiento = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //call endpoint function
        apiCgfAlojamiento.getByUserId(
            forAlojamiento.cedula, forAlojamiento.localidad, forAlojamiento.tipo).then((response) => {
                setcgfAlojamiento(response.data);
            }).catch((Error) => {
                console.log(Error)
            })
        console.log(cgfAlojamiento)
        forAlojamiento.localidad = '';
        forAlojamiento.tipo = '';
    }

    const handleEconomica = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //call endpoint function
        apiCgfEconomica.getByUserId(
            forEconomica.cedula, forEconomica.filter_min, forEconomica.filter_max
        ).then((response) => {
            setcgfEconomica(response.data)
        }).catch(
            (Error) => {
                console.log(Error)
            })
        console.log(cgfEconomica)
        forEconomica.filter_min = -1;
        forEconomica.filter_max = -1;
    }

    const handleTransporte = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //call endpoint function
        apiCgfTransporte.getcgfTransporte(
            forTransporte.cedula, forTransporte.tipo
        ).then((response) => {
            setcgfTransporte(response.data)
        }).catch((error) => {
            console.log(`${error}`)
        })
        console.log(cgfTransporte)
    }

    const handle_conv_insc = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        apiMisConvocatorias.getMisConvocatorias(
            params_conv_insc.cedula
        ).then((response) => {
            set_result_conv_insc(response.data)
            console.log(result_conv_insc)
        }).catch((error) => {
            console.log(`${error}: No hay convocatorias inscritas`)
        })
    }

    const handle_est_toma_conv = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        apiEst_toma_conv.post_est_toma_conv(
            params_est_toma_conv.cedula, params_est_toma_conv.conv_id, params_est_toma_conv.fecha
        ).then((response)=> {
            console.log("El estudiante se registró a la convocatoria exitosamente. Espere la respuesta de la dirección.")
            set_result_est_tom_conv(response.data)
            console.log(result_est_tom_conv)
        }).catch((error) => {
            console.log(`${error}: El estudiante no pudo registrarse a la convocatoria.`)
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


                    <BaseForm title='Convocatoria Fomento emprendimiento'
                        children={
                            <>
                                <TextField name='nombre' onChange={setEmprendimientoData} placeholder='Nombre' />
                                <TextField name='tema' onChange={setEmprendimientoData} placeholder='Tema emprendimiento' />
                            </>

                        }

                        children2={
                            <Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>
                        }

                        children3={
                            <>

                                {
                                    cgfEmprendimiento !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                        <Grid container
                                            component="div"
                                            justifyContent="center"
                                            alignItems="center"
                                            direction="row"
                                            spacing={1}
                                            sx={{ height: "100%", mt: 3 }}>

                                            <Grid item xs={1} sx={{ bgcolor: "lightgray" }}>
                                                <Typography variant='body1'>
                                                    ID
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={3} sx={{ bgcolor: "lightgray" }}>
                                                <Typography variant='body1'>
                                                    NOMBRE
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}>
                                                <Typography variant='body1'>
                                                    TEMA
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }} >
                                                <Typography variant='body1'>
                                                    COBERTURA
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4} sx={{ bgcolor: "lightgray" }}>
                                                <Typography variant='body1'>
                                                    DESCRIPCION
                                                </Typography>
                                            </Grid>

                                            {
                                                cgfEmprendimiento.length == 0 ? <p>No se han encontrado convocatorias</p>

                                                : cgfEmprendimiento!.map((convocatoria) => (
                                                    <>
                                                        <Grid item key={convocatoria.conv_id} xs={1}>
                                                            {convocatoria.conv_id}
                                                        </Grid>

                                                        <Grid item key={convocatoria.conv_id + 1} xs={3}>
                                                            {convocatoria.cgemNombreEmprend}
                                                        </Grid>

                                                        <Grid item key={convocatoria.conv_id + 2} xs={2}>
                                                            {convocatoria.cgemTema}
                                                        </Grid>

                                                        <Grid item key={convocatoria.conv_id + 3} xs={2}>
                                                            {convocatoria.cgemCobertura.toLocaleString('es-CO', options_currency2)}
                                                        </Grid>

                                                        <Grid item key={convocatoria.conv_id + 4} xs={4}>
                                                            {convocatoria.cgemDescripcion}
                                                        </Grid>
                                                    </>
                                                ))
                                            }
                                        </Grid>

                                    ) : <p>No se registran convocatorias.</p>}
                            </>
                        }
                        submit={handleEmprendimiento}
                    ></BaseForm>
                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >

                    <BaseForm title='Convocatoria Gestión Alimentaria'
                        children={
                            <>
                                <TextField name='cedula' onChange={setAlimentariaData} placeholder='Cédula' />
                                <TextField name='comida' onChange={setAlimentariaData} placeholder='Comida' />
                                <TextField name='lugar' onChange={setAlimentariaData} placeholder='Lugar' />
                            </>

                        }

                        children2={
                            <Button type='submit' variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>
                        }

                        children3={
                            <>

                                {
                                    cgfAlimentaria !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                        <Grid container
                                            component="div"
                                            justifyContent="center"
                                            alignItems="center"
                                            direction="row"
                                            spacing={1}
                                            sx={{ height: "100%", mt: 3 }}>

                                            <Grid item key={11111111} xs={4} sx={{ bgcolor: "lightgray" }}>
                                                <Typography variant='body1'>
                                                    ID
                                                </Typography>
                                            </Grid>

                                            <Grid item key={11111112}  xs={4} sx={{ bgcolor: "lightgray" }} >
                                                <Typography variant='body1'>
                                                    COMIDA
                                                </Typography>
                                            </Grid>

                                            <Grid item key={11111113} xs={4} sx={{ bgcolor: "lightgray" }}>
                                                <Typography variant='body1'>
                                                    LUGAR
                                                </Typography>
                                            </Grid>

                                            {
                                                cgfAlimentaria.length == 0 ? <p>La convocatoria no existe</p>
                                                : cgfAlimentaria!.map((convocatoria) => (
                                                    <>
                                                        <Grid item key={convocatoria.key} xs={4}>
                                                            {convocatoria.conv_id==null? 'El estudiante no existe o no puede acceder a la convocatoria por PBM' : convocatoria.conv_id}
                                                        </Grid>

                                                        <Grid item key={convocatoria.key + 1} xs={4}>
                                                            {convocatoria.cgaComida}
                                                        </Grid>

                                                        <Grid item key={convocatoria.key + 2} xs={4}>
                                                            {convocatoria.cgaLugar}
                                                        </Grid>
                                                    </>
                                                ))
                                            }
                                        </Grid>

                                    ) : <p>No se registran convocatorias.</p>}
                            </>
                        }
                        submit={handleAlimentaria}
                    ></BaseForm>


                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >

                    <BaseForm title='Convocatoria Gestión Alojamiento'
                        children={
                            <>
                                <TextField onChange={setAlojamientoData} name='cedula' placeholder='Cédula' />
                                <TextField onChange={setAlojamientoData} name='localidad' placeholder='Localidad' />
                                <TextField onChange={setAlojamientoData} name='tipo' placeholder='Tipo' />
                            </>

                        }

                        children2={
                            <Button type='submit' variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>
                        }

                        children3={<>


                            {
                                cgfAlojamiento !== null ? ( //if we got elements then we render them. if not then we don't render nothing.
                                    <>
                                        <Grid container
                                            component="div"
                                            justifyContent="center"
                                            alignItems="center"
                                            direction="row"
                                            spacing={1}
                                            sx={{ height: "100%", mt: 3 }}>

                                            <Grid item xs={1.71} sx={{ bgcolor: "lightgray" }}
                                            >
                                                <Typography variant='body1'>
                                                    ID
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={1.71} sx={{ bgcolor: "lightgray" }} >
                                                <Typography variant='body1'>
                                                    DIRECCION
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={1.71} sx={{ bgcolor: "lightgray" }}>
                                                <Typography variant='body1'>
                                                    LOCALIDAD
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={1.71} sx={{ bgcolor: "lightgray" }}
                                            >
                                                <Typography variant='body1'>
                                                    COBERTURA
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={1.71} sx={{ bgcolor: "lightgray" }} >
                                                <Typography variant='body1'>
                                                    TIPO VIVIENDA
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={1.71} sx={{ bgcolor: "lightgray" }}>
                                                <Typography variant='body1'>
                                                    DESCRIPCIÓN
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={1.71} sx={{ bgcolor: "lightgray" }}>
                                                <Typography variant='body1'>
                                                    COSTO
                                                </Typography>
                                            </Grid>

                                            {
                                                cgfAlojamiento.length == 0 ? <p>La convocatoria no existe</p>
                                                : cgfAlojamiento!.map((convocatoria) => (
                                                    <>
                                                        <Grid key={convocatoria.key} item xs={1.71}>
                                                            {convocatoria.conv_id==null? 'El estudiante no existe o no puede acceder a la convocatoria por PBM' : convocatoria.conv_id}
                                                        </Grid>

                                                        <Grid key={convocatoria.key + 1} item xs={1.71}>
                                                            {convocatoria.cgalDireccionAlojamiento}
                                                        </Grid>
                                                        <Grid key={convocatoria.key + 2} item xs={1.71}>
                                                            {convocatoria.cgalLocalidadAlojamiento}
                                                        </Grid>

                                                        <Grid key={convocatoria.key + 3} item xs={1.71}>
                                                            {convocatoria.cgalCobertura}
                                                        </Grid>

                                                        <Grid key={convocatoria.key + 4} item xs={1.71}>
                                                            {convocatoria.cgalTipoVivienda}
                                                        </Grid>

                                                        <Grid key={convocatoria.key + 5} item xs={1.71}>
                                                            {convocatoria.cgalDescripcion}
                                                        </Grid>

                                                        <Grid key={convocatoria.key + 6} item xs={1.71}>
                                                            {convocatoria.cgalCosto}
                                                        </Grid>
                                                    </>
                                                ))

                                            }

                                        </Grid>
                                    </>
                                ) : <p>No se registran convocatorias.</p>}
                        </>
                        }
                        submit={handleAlojamiento}
                    ></BaseForm>

                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >

                    <BaseForm title='Convocatoria Gestión Económica'
                        children={
                            <>
                                <TextField name='cedula' onChange={setEconomicaData} placeholder='Cédula' />
                                <TextField name='filter_min' onChange={setEconomicaData} placeholder='Min' />
                                <TextField name='filter_max' onChange={setEconomicaData} placeholder='Max' />
                            </>

                        }

                        children2={
                            <Button type='submit' variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>
                        }

                        children3={
                            <>

                                {
                                    cgfEconomica !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                        <Grid container
                                            component="div"
                                            justifyContent="center"
                                            alignItems="center"
                                            direction="row"
                                            spacing={1}
                                            sx={{ height: "100%", mt: 3 }}>

                                            <Grid item xs={6} sx={{ bgcolor: "lightgray" }}
                                            >
                                                <Typography variant='body1'>
                                                    ID
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={6} sx={{ bgcolor: "lightgray" }} >
                                                <Typography variant='body1'>
                                                    COBERTURA
                                                </Typography>
                                            </Grid>

                                            {
                                                cgfEconomica.length == 0 ? <p>No se han encontrado convocatorias</p>
                                                : cgfEconomica!.map((convocatoria) => (
                                                    <>
                                                        <Grid key={convocatoria.key} item xs={6}>
                                                            {convocatoria.conv_id==null? 'El estudiante no existe o no puede acceder a la convocatoria por PBM' : convocatoria.conv_id}
                                                        </Grid>
                                                        
                                                        <Grid key={convocatoria.key + 1} item xs={6}>
                                                            {render_price(convocatoria.cgeCobertura)}
                                                        </Grid>
                                                    </>

                                                ))

                                            }
                                        </Grid>

                                    ) : <p>No se registran convocatorias.</p>}
                            </>
                        }
                        submit={handleEconomica}
                    ></BaseForm>


                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >

                    <BaseForm title='Convocatoria Gestión Transporte'
                        children={
                            <>
                                <TextField
                                    onChange={setTransporteData}
                                    name='cedula'
                                    placeholder='Cédula' />

                                <TextField
                                    onChange={setTransporteData}
                                    name='tipo'
                                    placeholder='Tipo'
                                />
                            </>
                        }

                        children2={
                            <Button type='submit' variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>
                        }

                        children3={
                            <>

                                {
                                    cgfTransporte !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                        <Grid container
                                            component="div"
                                            justifyContent="center"
                                            alignItems="center"
                                            direction="row"
                                            spacing={1}
                                            sx={{ height: "100%", mt: 3 }}>

                                            <Grid item xs={4} sx={{ bgcolor: "lightgray" }}>
                                                <Typography variant='body1'>
                                                    ID
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={4} sx={{ bgcolor: "lightgray" }} >
                                                <Typography variant='body1'>
                                                    COBERTURA
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4} sx={{ bgcolor: "lightgray" }}>
                                                <Typography variant='body1'>
                                                    TIPO DE TRANSPORTE
                                                </Typography>
                                            </Grid>



                                            {
                                                cgfTransporte.length == 0 ? <p>No se han encontrado convocatorias</p>
                                                :cgfTransporte!.map((convocatoria) => (
                                                    <>
                                                        <Grid item key={convocatoria.key} xs={4}>
                                                            {convocatoria.conv_id==null? 'El estudiante no existe o no puede acceder a la convocatoria por PBM' : convocatoria.conv_id}
                                                        </Grid>

                                                        <Grid item key={convocatoria.key + 1} xs={4}>
                                                            {render_price(convocatoria.cgtCobertura)}
                                                        </Grid>

                                                        <Grid item key={convocatoria.key + 2} xs={4}>
                                                            {convocatoria.cgtTipoTransporte}
                                                        </Grid>
                                                    </>

                                                ))

                                            }
                                        </Grid>
                                    ) : <p>No se registran convocatorias.</p>}
                            </>
                        }
                        submit={handleTransporte}
                    ></BaseForm>
                </Grid>


                <Grid item sx={{ width: '75%' }}>
                        <BaseForm title='Convocatorias Inscritas' children={
                            <>
                                <TextField name='cedula' onChange={valueConvInsc} placeholder='Cédula' />
                            </>
                        }

                            children2={<Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>}

                            children3={<>
                                {result_conv_insc !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                <Grid container
                                    component="div"
                                    justifyContent="center"
                                    alignItems="center"
                                    direction="row"
                                    spacing={1}
                                    sx={{ height: "100%", mt: 3 }}>

                                    <Grid item key={11111111} xs={1} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            ID CONVOCATORIA
                                        </Typography>
                                    </Grid>

                                    <Grid item key={11111112} xs={1} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            ID PROGRAMA
                                        </Typography>
                                    </Grid>

                                    <Grid item key={11111113} xs={4} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            NOMBRE
                                        </Typography>
                                    </Grid>

                                    <Grid item key={11111114} xs={3} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            FECHA APERTURA
                                        </Typography>
                                    </Grid>

                                    <Grid item key={11111115} xs={3} sx={{ bgcolor: "lightgray" }}>
                                        <Typography variant='body1'>
                                            FECHA CIERRE
                                        </Typography>
                                    </Grid>

                                    {
                                        result_conv_insc.length == 0 ? <p>No se han encontrado las convocatorias o cédula no corresponde a estudiante</p>

                                        : result_conv_insc!.map((result) => (
                                            <>
                                                <Grid item key={result.key} xs={1}>
                                                    {result.conv_id == null ? 'No se han encontrado las convocatorias o cédula no corresponde a estudiante' : result.conv_id}
                                                </Grid>

                                                <Grid item key={result.key+1} xs={1}>
                                                    {result.Programa_progID}
                                                </Grid>

                                                <Grid item key={result.key+2} xs={4}>
                                                    {result.convNombre}
                                                </Grid>

                                                <Grid item key={result.key+3} xs={3}>
                                                    {result.convFechaApertura}
                                                </Grid>

                                                <Grid item key={result.key+4} xs={3}>
                                                    {result.convFechaCierre}
                                                </Grid>
                                            </>
                                            ))
                                    }
                                </Grid>

                                ) : null}
                            </>} submit={handle_conv_insc}
                        ></BaseForm>
                </Grid>


              <Grid item sx={{ width: '75%' }} >
                        <BaseForm title='Inscribase a una convocatoria' children={
                            <>
                                <TextField name='cedula' onChange={value_est_toma_conv} placeholder='Cédula' />
                                <TextField name='conv_id' onChange={value_est_toma_conv} placeholder='ID Convocatoria' />
                                <TextField name='fecha' onChange={value_est_toma_conv} placeholder='Fecha' />
                            </>
                        }

                            children2={<Button type='submit' variant="contained"
                                sx={{ color: "black", bgcolor: "#E74C3C" }}>Inscribirme</Button>}

                            children3={<>
                                {result_est_tom_conv !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                <Grid container
                                    component="div"
                                    justifyContent="center"
                                    alignItems="center"
                                    direction="row"
                                    spacing={1}
                                    sx={{ height: "100%", mt: 3 }}>

                                        {
                                            result_est_tom_conv!.map((response) => (
                                               <Grid item xs={3}>
                                                    {response.Answer}
                                                </Grid>
                                            ))
                                        }
                                    
                                    </Grid>

                                ) : <p>No se inscibió la convocatoria</p>}
                            </>} submit={handle_est_toma_conv}
                        ></BaseForm>
                </Grid>
            </Grid>
        </LayoutFomento>
    )
}

