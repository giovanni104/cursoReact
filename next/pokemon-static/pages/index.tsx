import { NextPage ,GetStaticProps} from "next";
import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts/Layout";
import { pokeApi } from '../api';
import { log } from "console";
import { PokemonListResponse } from "../interfaces";

const HomePage: NextPage = (props) => {
  return (
    <Layout title="Listado de pokemons">
      <ul>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
      </ul>
    </Layout>
  );
};


 

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
console.log(data);

  return {
    props: {
      pokemons:data.results
    }
  }
}



export default HomePage;
