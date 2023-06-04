"use client"
import { Container } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'
import Search from '@/app/components/Salud/Search'
import { ScheduleCancel } from '@/app/components/Salud/ScheduleCancel'
import { ScheduleModify } from '@/app/components/Salud/ScheduleModify'
import { ScheduleModify2 } from '@/app/components/Salud/ScheduleModify2'

export default function testingPage() {

    return (
        <Container component='main' sx={{ background: 'black' }}>

            {/*<Search placeHolder='cc' buttonText='consultar' height='100%' width='25%'></Search>*/}

            {/*<ScheduleCancel placeHolder='cedula' buttonText='consultar' height='100%' width='50%' ></ScheduleCancel>*/}

            {/*<ScheduleModify placeHolder='CC' placeHolder2='Enfermedad' placeHolder3='Días' buttonText='Subir' height='100%' width='100%'></ScheduleModify>*/}

            {/*<ScheduleModify2 placeHolder1='ID Atención' placeHolder2='Tipo' buttonText='consultar' height='100%' width='100%'></ScheduleModify2>*/}

        </Container>
    )
}
