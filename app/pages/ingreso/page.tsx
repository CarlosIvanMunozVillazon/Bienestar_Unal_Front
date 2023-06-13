"use client"

import { useNotification } from '@/app/context/notification.context'
import { Box, Button, Link, Container, Grid, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, FormEvent } from 'react'
import { loginValidation } from '@/app/helpers/formValidtation'
import { response } from '../actividadFisica/convocatorias/interface/response.interface'
import { apiIngreso } from '@/app/api/Ingreso/ingreso'


type LoginData = {
    email: string,
    password: string
}

export default function Login() {

    const { getError, getSuccess } = useNotification(); //Custom context called "useNotification()".

    const [loginData, setLoginData] = React.useState<LoginData>(
        {
            email: "",
            password: ""
        }
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        setLoginData(
            {
                ...loginData, [e.target.name]: e.target.value
            }
        )
    }

    const [resp, setResp] = React.useState<response[] | null>(null);

    const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        loginValidation.validate(loginData).then(() => {
            apiIngreso.getAccess(loginData.email, loginData.password).then((response) => {
                setResp(response.data);
                getSuccess('Acceso concedido.');
            }).catch((error) => {
                getError(error.message)
            })
        }).catch((error) => {
            getError(error.message)
        })
    }

    return (
        <>
            <Box sx={{
                backgroundImage: 'url(/images/gloria_galeano_1.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",
                minHeight: '100vh',
            }}>
                <Container component="main" maxWidth="xl">

                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ minHeight: "100vh" }}
                    >

                        <Grid item >
                            <Paper>
                                <Box component="form" onSubmit={handleSubmit} sx={{ minWidth: "30vh" }}>
                                    <Stack spacing={2} direction="column">
                                        <Typography variant="h4">Ingresar</Typography>

                                        <TextField
                                            label="Correo Electrónico"
                                            type="email"
                                            placeholder='nombre@unal.edu.co'
                                            name="email"
                                            fullWidth
                                            onChange={handleChange}
                                        />

                                        <TextField
                                            label="Contraseña"
                                            type="password"
                                            placeholder='Ingrese su contraseña aqui'
                                            name="password"
                                            fullWidth
                                            onChange={handleChange}
                                        />

                                        <Button type="submit" fullWidth sx={{ color: "black", backgroundColor: "#4CAF50" }}>Acceder</Button>

                                        {
                                            resp !== null ?
                                                <IconButton>
                                                    <Link underline = 'hover' color='GrayText' href='/pages/mainBienestar'>
                                                        <Typography variant='caption'>
                                                            Ir a Principal
                                                        </Typography>
                                                    </Link>
                                                </IconButton>
                                                : null
                                        }
                                    </Stack>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
