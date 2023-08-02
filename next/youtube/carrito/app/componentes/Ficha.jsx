import Link from "next/link";
import Imagen from "./Imagen"
import estilos from "./ficha.module.css"
function Ficha({valor}) {
  return (
    <>
      <div className={estilos.producto}>
        <div className="nombre">{valor.title}</div>
        <div className="precio">{valor.price}</div>
        <div className="imagen">
            <Imagen  valor={valor} /> 
        </div>
        <div className="ver">
          <Link href={`/productos/${valor.id}`} > <button>Ver</button></Link>
        </div>
      </div>
    </>
  );
}

export default Ficha;
