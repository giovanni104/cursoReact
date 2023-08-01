 'use client'

import Image from "next/image"
import { Boton } from "./Boton"

export const Ficha = ({valor}) => {
    const cargador=({src,width})=>{
        return `${src}?w=${width}`
    }
  return (
  <>
     <div className="persona">
          <h3>{valor.name.first}</h3>
          <Image  loader={cargador}  src={valor.picture.large} alt=""  width={125} height={125}/>
          <div><Boton valor={valor}/> </div>
        </div>
  </>
  )
}
