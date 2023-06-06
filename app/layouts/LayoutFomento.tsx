"use client"

import React, { Children } from 'react'
import { Breadcrumbs, Button, Divider, Grid, IconButton, Link, Stack, Typography } from '@mui/material'
import { BasicNavbar } from '@/app/components/General/BasicNavbar';

type saludLayoutProps = {
    children: React.ReactNode
}


export default function LayoutFomento({ children }: saludLayoutProps) {

    //Money Section layout
    return (
        <>
            <BasicNavbar backgroundColor='#E74C3C' pageName='Gestión & Fomento Socioeconómico'>
                <Typography variant="h6" fontWeight='bold' textAlign="center">Servicios</Typography>
                <Divider />

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/gestionYFomento/servicios/convocatorias'>
                        <Typography variant="body1" textAlign="center">Convocatorias</Typography>
                    </Link>
                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/gestionYFomento/servicios/corresponsabilidad'>
                        <Typography variant="body1" textAlign="center">Corresponsabilidad</Typography>
                    </Link>
                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/gestionYFomento/servicios/otros'>
                        <Typography variant="body1" textAlign="center">Otros</Typography>
                    </Link>
                </IconButton>


            </BasicNavbar>

            <Grid
                container
                component="div"
                alignItems="center"
                justifyContent="center"
                direction="column"
                sx={{ width: "100%", mt: 1 }}
                spacing={2}
                maxHeight="xl"
            >

                <Grid item>


                    <Stack direction="row"
                        justifyContent="left"
                        alignItems="left"
                        spacing={8}
                    >
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="text.primary" href="/pages/actividadFisica">
                                Actividad Física & Deporte
                            </Link>
                            <Link
                                underline="hover"
                                color="text.primary"
                                href="/pages/gestionYFomento"
                            >
                                Gestión & Fomento Socioeconómico
                            </Link>
                            <Link
                                underline="hover"
                                color="text.primary"
                                href="/pages/salud"
                            >
                                Salud
                            </Link>
                        </Breadcrumbs>

                    </Stack>
                </Grid>

            </Grid>

            {children}


        </>
    )
}

{/*

# SERVICIOS # SERVICIOS # SERVICIOS

# 1. MIS FALLAS DE ALIMENTACIÓN
El estudiante puede consultar sus fallas de alimentación
sp_fallaalimentacion_est(in id int)

#4. MI PBM ???? es necesario?
El estudiante desea conocer su PBM
    function pbm_est(id_est int)


# CORRESPONSABILIDAD # CORRESPONSABILIDAD # CORRESPONSABILIDAD    
# 2.MI CORRESPONSABILIDAD
    El estudiante puede consultar sus actividades de corresponsabilidad realizadas
	sp_actividadcorresp_est(in id int)

# 3.HORAS PENDIENTES CORRESPONSABILIDAD por actividad
    El estudiante puede consultar la cantidad de horas pendientes de corresponsabilidad
	function horas_corresponsabilidad_est(id_est int)
       
    

# CONVOCATORIAS # CONVOCATORIAS # CONVOCATORIAS     
# 5.CONVOCATORIAS 
    El estudiante solo desea visualizar las convocatorias a las que podría acceder según su PBM

	#5.1 La convocatoria fomento emprendimeinto la busca según tema
		sp_convocatoriafomentoemprendimeinto_est(in id_est int, in tema varchar(50))

	#5.2 La convocatoria de gestión alimentaria solo se puede acceder con PBM < 25
		sp_convocatoriagestionalimentaria_est(in id_est int, in comida enum('Desayuno','Almuerzo','Cena'), in lugar 
			enum('Comedor central','Hemeroteca','Odontología','Agronomía','Biología','Ciencias Humanas',
			'Ciencias Económicas','Matemáticas','otro'))

	#5.3 La convocatoria de gestión alojamiento solo se puede acceder con PBM < 25
		sp_convocatoriagestionalojamiento_est(in id_est int, in localidad varchar(100), in tipo 
			enum('Hotel','Casa','Apartamento','Vivienda familiar','Residencia Universitaria',
			'Apartaestudio','Habitación','otro'))

	#5.4 La convocatoria de gestión economica solo se puede acceder con PBM < 20
		sp_convocatoriagestioneconomica_est(in id_est int)

	#5.5 La convocatoria de gestión transporte solo se puede acceder con PBM < 15
		sp_convocatoriagestiontransporte_est(in id_est int, in tipo enum('Transporte público masivo','otro'))


# 9. CHECK DE CONVOCATORIA ????? esto no debe funcionar a bajo nivel? No implementar
    Si el estudiante inserta una conv. en est_toma_conv, verificar que no ingrese
#dos veces la misma en el mismo semestre
	sp_insertar_est_tm_conv_est(in id_est int, in id_conv int, in fecha DATE)

# 11. DETALLE DE CONVOCATORIA ¿Cómo lo implemento? ¿Es necesario? No implementar
un estudiante ya conoce la convocatoria como ya está en la página.
    El estudiante/secretario quiere conocer el programa y área de una convocatoria
	programa_area_convocatoria(in id_conv int)

*/}