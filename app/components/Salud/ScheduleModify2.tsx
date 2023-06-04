import React from 'react'
//Neccesary imports for using datepickers
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Paper, Box, Stack, TextField, Button } from '@mui/material';

//Schedule or modify patient attention.

type scheduleModify2Properties = {
    placeHolder1 : string,
    placeHolder2 : string,
    buttonText : string,
    height : string,
    width : string
}

export const ScheduleModify2 : React.FC <scheduleModify2Properties> = ({placeHolder1, placeHolder2, buttonText, height, width}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Paper>
                <Box>
                    <Stack spacing={2} direction='row' sx={{ height: {height}, width: {width} }}>

                        <TextField placeholder={placeHolder1} />
                        <DatePicker/>
                        <TextField placeholder={placeHolder2} />
                        <Button variant='contained' type='submit'>{buttonText}</Button>
                    </Stack>
                </Box>
            </Paper>

        </LocalizationProvider>

    )
}
