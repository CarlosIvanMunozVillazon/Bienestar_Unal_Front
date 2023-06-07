import { Paper, Box, Typography, Stack, TextField, Button, Grid } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { convocatoriaEmprendimiento } from '@/app/pages/gestionYFomento/convocatorias/interface/emprendimiento.interface';

type baseLayoutProps = {
    children: React.ReactNode,
    children2: React.ReactNode,
}

export const baseLayout: React.FC<baseLayoutProps> = ({children, children2} : baseLayoutProps) => {
    return (
        <Grid
            container
            justifyContent="space-between"
            direction="row"
            alignItems="center"
        >

            <Grid item>

                <Stack direction='row'
                    spacing={4}>

                {children}

                </Stack>


            </Grid>

            <Grid item>

                {children2}

            </Grid>

        </Grid>
    )
}
