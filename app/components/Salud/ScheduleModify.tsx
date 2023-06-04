"use client"
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


import React from 'react'

//Schedule or modify incapacities

type scheduleModifyProperties = {

    placeHolder: string,
    placeHolder2: string,
    placeHolder3: string,
    buttonText: string,
    height: string,
    width: string,

}

export const ScheduleModify: React.FC<scheduleModifyProperties> = ({ placeHolder, height, width, buttonText, placeHolder2, placeHolder3 }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Paper>
                <Box>
                    <Stack spacing={2} direction='row' sx={{ height: { height }, width: { width } }}>

                        <TextField placeholder={placeHolder} />
                        <DatePicker/>
                        <TextField placeholder={placeHolder2} />
                        <TextField placeholder={placeHolder3} />
                        <Button variant='contained' type='submit'>{buttonText}</Button>
                    </Stack>
                </Box>
            </Paper>
        </LocalizationProvider>
    )
}
