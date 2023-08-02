'use client'
import Image from "next/image";

const cargador = ({ src, width }) => {
  return `${src}?w=${width}`;
};

const Imagen = ({ valor }) => {
  return (
    <>
      <Image
        loader={cargador}
        width={150}
        height={200}
        src={valor.image}
        alt={valor.title}
      />
    </>
  );
};


export default Imagen