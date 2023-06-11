"use client"

import LayoutMain from '@/app/layouts/LayoutMain';
import { Grid } from '@mui/material';
import React from 'react';



export default function BienestarDash() {



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
                maxHeight="xl"
            >
                
                <p>Ya no quiero mas hp</p>

            </Grid>
        </LayoutMain>
    )
}