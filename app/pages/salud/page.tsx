"use client"
import React from 'react'

import LayoutSalud from '@/app/layouts/LayoutSalud';

export default function Salud() {
    
    {/*
    
    # 2. Ver sus citas medicas proximas:****
    pas_citas_agendadas(pacienteID INT)
    
    # 5. Ver los resultados de cada cita medica **
    pas_check_resultados(IN usuarioID INT)
    
    # 6. Ver el estado de las incapacidades ***
    pas_view_incapacidad(IN usuarioID INT)
    
    # 9. Ver el estado de las atenciones en salud de un usuario  **
    pas_view_atencionsalud(usuarioID INT)
    
    # 12. Ver perfil de riesgo integral de un usuario **
        pas_view_perfilriesgo(usuarioID INT)
    
    El estudiante se le permite acceder a citas medicas, cancelarlas y ver la informacion de cada una (como medicamentos
        que le hayan enviado). Por ello tendra los siguientes procedimientos:




# 3. Cancelar alguna cita **PUT
    pas_delete_cita_medica(usuarioID INT, fechaCita DATETIME, especialidadCita VARCHAR(45))

# 4.Agendar alguna cita **PUT
    pas_add_cita_medica(usuarioID INT, fechaCita DATETIME, especialidadCita VARCHAR(45))


Ademas, entre los diferentes tramites que puede tener esta el de pasar incapacidades medicas o atenciones en
salud para que sean verificadas por el ara de salud.


# 7. Añadir una incapacidad  **POST
    pas_add_incapacidad(usuarioID INT, fecha DATETIME, enfermedad VARCHAR(45), dias TINYINT)

# 8. Modificar una incapacidad de un usuario
    pas_edit_incapacidad(incapacidadID INT, fecha DATETIME, enfermedad VARCHAR(45), dias TINYINT)


# 10. Añadir una atencion en salud de un usuario
    pas_add_atencionsalud(usuarioID INT, fecha DATETIME, tipo VARCHAR(45))

# 11. Modificar una atencion en salud de un usuario
    pas_edit_atencionsalud(atencionsaludID INT, fecha DATETIME, tipo VARCHAR(45))

añadir incapacidad falta y atención en salud **
*/}

    return (
        <LayoutSalud>
            <p>Agregar banner fancy</p>
        </LayoutSalud>
    )
}
//Table visualization:
{/* <Grid item sx={{ width: "90%", mt: 1.8, mb: 2 }}>
                        <Grid
                            container
                            component="div"
                            alignItems="center"
                            justifyContent="center"
                            direction="row"
                            sx={{ width: "100%" }}
                            spacing={2}
                            border="1px solid gray"
                        >

                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    CÓDIGO DE CITA
                                </Typography>
                            </Grid>

                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }} >
                                <Typography variant='body1'>
                                    DOCTOR
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}>
                                <Typography variant='body1'>
                                    DIAGNÓSTICO
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    ESPECIALIDAD
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    FECHA
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    CÉDULA DE CIUDADANÍA
                                </Typography>
                            </Grid>

                        </Grid>

                    </Grid> */}


//Register example
{/*                            <Grid item xs={2}>
                                código cita
                            </Grid>


                            <Grid item xs={2}>
                                cc.doctor
                            </Grid>

                            <Grid item xs={2}>
                                diagnóstico
                            </Grid>

                            <Grid item xs={2}>
                                especialidad
                            </Grid>

                            <Grid item xs={2}>
                                00-00-00
                            </Grid>

                            <Grid item xs={2}>
                                cc.estudiante
                            </Grid>

 */}
//Weird buttons
{/* <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<HealingIcon />} >

                            <Typography variant="body1">
                                Servicios
                            </Typography>

                        </Button>

                        <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<AccountCircleIcon />} >

                            <Typography variant="body1">
                                Trámites
                            </Typography>

                        </Button> */}

//Weird rendering

{/* {
                    serviceDisplay ? <Grid item>


                        <Stack direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={8}
                        >
                            <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>

                                <Typography variant="body1">
                                    Citas médicas
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<HealingIcon />}>

                                <Typography variant="body1">
                                    Incapacidades
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<AccountCircleIcon />}>

                                <Typography variant="body1">
                                    Mi perfil de riesgo
                                </Typography>

                            </Button>
                        </Stack>
                    </Grid> : <p>Nothing to render</p>
                }

                {
                    procedureDisplay ? <Grid item>


                        <Stack direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={8}
                        >
                            <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>

                                <Typography variant="body1">
                                    Atención en Salud
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<HealingIcon />}>

                                <Typography variant="body1">
                                    Incapacidades
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "Teal" }} endIcon={<AccountCircleIcon />}>

                                <Typography variant="body1">
                                    Mi perfil de riesgo
                                </Typography>

                            </Button>
                        </Stack>
                    </Grid> : <p>Nothing to render</p>
                } */}
