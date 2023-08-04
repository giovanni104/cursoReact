"use client";

import { guardarCategoria } from "@/store/miSlice";
import Imagen from "../componentes/Imagen";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
const BotonVer = ({ valor }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const visualizar = (e) => {
    dispatch(guardarCategoria(e));
    router.push("/portipo");
  };

  return (
    <>
      <div onClick={() => visualizar(valor.categoria)}>
        <Imagen valor={valor} />
      </div>
    </>
  );
};

export default BotonVer;
