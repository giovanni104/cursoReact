'use client'
import Image from "next/image";
import imagen2 from "../public/imagenes/imagen2.png";
 
const cargador=({src,width})=>{
    return `https://occ-0-58-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/${src}?w=${width}`
}


export default function page() {
  return (
    <>
    <div>Pagina principal</div>
    <div className="caja">
    <Image src="/imagenes/imagen1.png" width={426} height={600} layout="responsive"/>
    </div>
    <div className="caja">
    <Image src={imagen2}  layout="responsive" />
    </div>

    <div className="caja">
    <Image  loader={cargador}   src="AAAABQPTMrdIdgzonbEDXw1RVRQmfZHp5dvsg672aHCBe7GXwNyyrl4_qZFkWxsLY0SHaozKsKPUWprP65AF2qZ0mLP6YxuwEdxxnr_8.jpg"  width={400} height={300} layout="responsive" />
    </div>


    
    </>
  )
}
