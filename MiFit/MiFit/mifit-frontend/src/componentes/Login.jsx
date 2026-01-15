import { useEffect, useRef } from "react";
import { getUsuarios } from "../../../mifit-api/controller";
export const Usuario = () => {
  return (
    <>
    <h2>Usuario</h2></>
  )
}
const Usuario = () => {
    let usuario = async () => {
        let controller = new AbortController
        let options = {
            method: `get`,
            signal: controller.signal
        }
        try {
            let petición = await fetch (`http://localhost:3000/usuario`, options)
            let datos = await peticion.json()
            console.log(datos)
        } catch (error) {
            console.log(error.message)
        }finally{
            controller.abort()
        }
    }
    useEffect(()=> {
        getUsuarios()
    }, [])
    return(
        <h2>Fetches1</h2>
    )
}