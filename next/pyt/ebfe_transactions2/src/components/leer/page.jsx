"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

export const Leer = () => {
  console.log('iniciando leer')
  const miNombre = useSelector((state) => state.valores.nombre);
  return (
    <>
      <h1>Leer:</h1>
      <Link href="/escribir">Escribir</Link>
      <h2>{miNombre}</h2>
    </>
  );
};
