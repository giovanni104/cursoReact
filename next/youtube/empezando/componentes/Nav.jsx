import React from 'react'
import Link from "next/link";
import {Francois_One} from "@next/font/google"



const fuente=Francois_One({weight:'400' ,subsets:['latin'],variable:'--mifont'})

export default function Nav() {
  return (
    < >
    <nav className={fuente.className}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/quienesSomos">Quienes somos</Link>
        <Link href="/personas">Personas</Link>
      </nav>
    
    
    </ >
  )
}
