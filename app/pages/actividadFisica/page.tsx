"use client"
import BasicLayout from '@/app/layouts/BasicLayout'
import { Grid, Button, Typography, Stack } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

import Person2Icon from '@mui/icons-material/Person2';
import GradeIcon from '@mui/icons-material/Grade';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LayoutDeporte from '@/app/layouts/LayoutDeporte';

export default function ActividadFisicaYDeporte() {
//# Actividad Física y Deporte


// OTROS
// # 1. Un usuario necesita ver los torneos internos disponibles
// 	sp_consultar_torneos_internos()

// # 3. Se quiere consultar información acerca de eventos, talleres y proyectos disponbibles
// 	# 3.1 pas_consultar_info_eventoTaller(in idEveTa int)
// 	# 3.2 pas_consultar_info_proyecto(in idProy int)

// # 6. Se quiere consultar información acerca de eventos, talleres y proyectos disponbibles para el área de deporte
// 	pas_consultar_eventoTaller_programa (in idPrograma int) usar id's programas de deportes



// #CONVOCATORIAS
// # 4. Un estudiante quiere participar en una convocatoria
// 	pas_participar_convocatoria(in ccEstudiante int, in idConv int, in fechaInscripcion date)

// # 5. Un estudiante quiere consultar las convocatorias en las que participa
// 	sp_consultar_mis_convocatorias (in cedula int)

// # 7. Se requiere consultar las convocatorias que hay por programa de deporte.
// 	sp_consultar_convocatorias_deporte(in idPrograma int) usar id's programas de deportes

// # 2. Un usuario necesita ver los cursos libres de deportes disponibles
// 	sp_consultar_convocatoria_cursos_libres()
return (
        <LayoutDeporte>
            <p>Deporte página principal</p>
        </LayoutDeporte>        
    )
}


{/* <Grid
                    container
                    component="main"
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    sx={{ width: "100%", mt: 1 }}
                    spacing={2}
                    maxHeight="xl"
                >

                    <Grid item>

                        <Stack direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={8}
                        >
                            <Button variant="contained" sx={{ color: "black", bgcolor: "orange" }} endIcon={<SearchIcon />}>

                                <Typography variant="body1">
                                    Convocatorias
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "orange" }} endIcon={<SportsBaseballIcon />}>

                                <Typography variant="body1">
                                    Torneos Internos
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "orange" }} endIcon={<GradeIcon />}>

                                <Typography variant="body1">
                                    Cursos Libres
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "orange" }} endIcon={<LightbulbIcon />}>

                                <Typography variant="body1">
                                    Programas
                                </Typography>

                            </Button>

                            <Button variant="contained" sx={{ color: "black", bgcolor: "orange" }} endIcon={<Person2Icon />}>

                                <Typography variant="body1">
                                    Mis convocatorias
                                </Typography>

                            </Button>

                        </Stack>



                    </Grid>
                    <Grid item sx={{ width: "90%", mt: 1.8, mb: 2 }}>
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

                            <Grid item xs={1.7} sx={{ bgcolor: "lightgray" }}>
                                <Typography variant='body1'>
                                    ID CONVOCATORIA
                                </Typography>
                            </Grid>

                            <Grid item xs={1.7} sx={{ bgcolor: "lightgray" }} >
                                <Typography variant='body1'>
                                    PROGRAMA
                                </Typography>
                            </Grid>
                            <Grid item xs={1.7} sx={{ bgcolor: "lightgray" }}>
                                <Typography variant='body1'>
                                    NOMBRE
                                </Typography>
                            </Grid>
                            <Grid item xs={1.7} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    FECHA DE APERTURA
                                </Typography>
                            </Grid>
                            <Grid item xs={1.7} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    FECHA DE CIERRE
                                </Typography>
                            </Grid>
                            <Grid item xs={1.7} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    ESTADO
                                </Typography>
                            </Grid>

                            <Grid item xs={1.7} sx={{ bgcolor: "lightgray" }}


                            >
                                <Typography variant='body1'>
                                    PERIODO
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid > */}