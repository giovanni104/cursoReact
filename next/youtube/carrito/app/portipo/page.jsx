"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Ficha from "../componentes/Ficha";
import estilos from "../productos/productos.module.css"
export default function page() {
  const categoria = useSelector((state) => state.misValores.categoria);
  const [contenido, setContenido] = useState("");
  useEffect(() => {
    async function obtenerDatos() {
      const respuesta = await fetch(
        `https://fakestoreapi.com/products/category/${categoria}`
      );
      const datos = await respuesta.json();
      setContenido(() =>
        datos.map((valor) => <Ficha key={valor.id} valor={valor} />)
      );
    }
    obtenerDatos();
  }, [categoria]);

  return (
    <>
      <div className={estilos.productos}>{contenido}</div>
    </>
  );
}
