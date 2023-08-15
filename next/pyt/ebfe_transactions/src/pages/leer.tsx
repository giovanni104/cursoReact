import React from 'react'
import { NextPage } from 'next'
 import {  Transaccion } from '../components/transaccion/transaccion'
import { Button } from '@mui/material'
import axios from 'axios'
import {Leer} from '../components/leer/page'
const publicFetch = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})
const handlerAuthPassword = async () => {
 
  const  respuesta = await publicFetch.get(`dummy`)
  console.log("Se Consume el servicio "+respuesta)
}

const leerPage: NextPage = (props) => {
  return (
    <>
     <Leer/>
   
    </>
  )
}

 
export default leerPage