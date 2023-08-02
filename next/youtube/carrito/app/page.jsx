import Link from "next/link"

 const page=()=> {
  return (
    <div>Pagina principal
    <Link href="/categorias"><button>Categorias</button></Link>
    <Link href="/productos"><button>Productos</button></Link>
    
    </div>
    
  )
}

export default page