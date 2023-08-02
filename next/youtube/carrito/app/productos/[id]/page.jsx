import FichaIndividual from "./FichaIndividual";

const cargarDatos = (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  }).then((response) => response.json());
};
export default async function page({ params }) {
  const { id } = params;
  const datos = await cargarDatos(id);

  return <>
  <FichaIndividual datos={datos}/>
  </>;
}
