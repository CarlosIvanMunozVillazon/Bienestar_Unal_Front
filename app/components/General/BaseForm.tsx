import { Paper, Box, Typography, Grid, Stack, TextField, Button } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';

type BaseFormProps = {
    title : string,
    children?: React.ReactNode,
    children2: React.ReactNode,
    children3: React.ReactNode,
    submit: (e : React.FormEvent<HTMLFormElement>) => void
}

export const BaseForm: React.FC<BaseFormProps> = ({ title, children, children2, children3, submit }: BaseFormProps) => {
    return (
        <Paper>
            <Box component='form' onSubmit={submit}
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

                            {children}

                        </Stack>

                    </Grid>

                    <Grid item>

                        {children2}

                    </Grid>

                </Grid>

            </Box>

            {children3}

        </Paper>
    )
}


{/*

<TextField placeholder='Cédula' />

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker format="YYYY/MM/DD" />
                            </LocalizationProvider>

                            <TextField placeholder='Especialidad' />

                            <Button type='submit' variant="contained"
                            sx={{ color: "black", bgcolor: "Teal" }} endIcon={<SearchIcon />}>Agendar</Button>

*/}