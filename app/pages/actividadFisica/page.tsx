"use client"

import React from 'react'
import { Grid} from '@mui/material'
import LayoutDeporte from '@/app/layouts/LayoutDeporte';

export default function ActividadFisicaYDeporte() {

return (
        <LayoutDeporte>
            <Grid container
                component="div"
                alignItems="center"
                justifyContent="center"
                direction="column"
                sx={{ width: "100%", mt: 1 }}
                spacing={3}
                maxHeight="xl">

                <Grid item sx={{ width: '100%' }} container justifyContent="center" alignItems="center">
                    <p>Página principal de deporte</p>
                </Grid>

                <Grid item sx={{ width: '100%' }} container justifyContent="center" alignItems="center">
                    <p>Acceda a al menú en el icono en la zona superior izquierda</p>
                </Grid>

                <Grid item sx={{ width: '100%' }} container justifyContent="center" alignItems="center">
                    <img src="data:image/png;base64,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" alt="Bienestar_img" />
                </Grid>
            </Grid>
        </LayoutDeporte>        
    )
}
