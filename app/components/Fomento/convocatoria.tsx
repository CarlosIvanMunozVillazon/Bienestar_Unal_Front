import { Paper, Box, Typography, Stack, TextField, Button, Grid } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { convocatoriaEmprendimiento } from '@/app/pages/gestionYFomento/convocatorias/interface/emprendimiento.interface';


type ConvocatoriaFomentoProps = {
    title: string,
    children: React.ReactNode,
    convocatoria : any

}

export const ConvocatoriaFomento: React.FC<ConvocatoriaFomentoProps> = ({ title, children, convocatoria }: ConvocatoriaFomentoProps) => {



    return (
        <Paper>
            <Box component='form'
                sx={{ width: '100%' }}
            >
                <Typography variant='h6'>{title}
                </Typography>
                <Grid
                    container
                    justifyContent="space-between"
                    direction="row"
                    alignItems="center"
                >
                    <Grid item>

                        <Stack direction='row'
                            spacing={4}>


                            <TextField placeholder='Cédula' />

                            <TextField placeholder='Tema emprendimiento' />

                        </Stack>


                    </Grid>

                    <Grid item>
                        <Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>

                    </Grid>

                </Grid>



            </Box>

            {
                cgfEmprendimiento !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                    <Grid container
                        component="div"
                        justifyContent="center"
                        alignItems="center"
                        direction="row"
                        spacing={1}
                        sx={{ height: "100%" }}>

                        {
                            cgfEmprendimiento!.map((convocatoria) => (
                                <Grid item xs={3}>

                                </Grid>
                            ))

                        }
                    </Grid>

                ) : null}


        </Paper>
    )
}

