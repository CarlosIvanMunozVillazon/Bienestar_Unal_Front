import {
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Typography
} from '@mui/material'

import React, { FormEvent } from 'react'

type searchProperties = {

    placeHolder: string,
    buttonText: string,
    height : string,
    width : string
}

const Search: React.FC<searchProperties> = ({ placeHolder, buttonText, height, width }: searchProperties) => {
    
    const handleSearchSubmit = (e:FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log('Hello MotherFuckers')
    }

    return (
        <Paper sx = {{height : {height}, width : {width}}}>
            <Box component = 'form' onSubmit={handleSearchSubmit}>
                <Stack direction="row" spacing={2}>
                    <TextField placeholder={placeHolder}></TextField>
                    <Button type = 'submit' variant = 'contained'>
                        <Typography variant='body1'>{buttonText}</Typography>
                    </Button>
                </Stack>
            </Box>
        </Paper>
    )
}
export default Search