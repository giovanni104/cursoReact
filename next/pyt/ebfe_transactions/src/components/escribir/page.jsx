"use client";
import Link from "next/link";
import { useState } from "react";
import { guardarnombre } from "@/store/store";
import { useDispatch } from "react-redux";
export const Escribir = () => {
  const [nuevoValor, setNuevoValor] = useState("");
  const dispatch = useDispatch();
  const modificar = () => {
    dispatch(guardarnombre(nuevoValor));
  };

  return (
    <>
      <h1>Escribir:</h1>
      <div>
        <Link href="/leer">Leer</Link>
      </div>
      <input
        value={nuevoValor}
        onChange={(e) => setNuevoValor(e.target.value)}
      />
      <button onClick={modificar}>Modificar el valor</button>
    </>
  );
};
