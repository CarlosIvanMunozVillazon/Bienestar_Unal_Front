import { Paper, Box, Stack, TextField, Button, Typography } from '@mui/material'
import React, { FormEvent } from 'react'

//Schedule or cancel medical appointments

type scheduleCancelProperties = {

    placeHolder: string,
    buttonText: string,
    height: string,
    width: string

}

export const ScheduleCancel: React.FC<scheduleCancelProperties> = ({ placeHolder, buttonText, height, width }: scheduleCancelProperties) => {

    const handleScheduleCancelSumbit = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log('Hello MotherFuckers')
    }


    return (
        <Paper sx={{ height: { height }, width: { width } }}>
            <Box component='form' onSubmit={handleScheduleCancelSumbit}>
                <Stack direction="row" spacing={2}>
                    <TextField placeholder={placeHolder}></TextField>
                    <TextField placeholder='fecha'></TextField>
                    <TextField placeholder='especialidad'></TextField>
                    <Button type='submit' variant='contained'>
                        <Typography variant='body1'>{buttonText}</Typography>
                    </Button>
                </Stack>
            </Box>
        </Paper>
    )
}
