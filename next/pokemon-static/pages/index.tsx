import { NextPage, GetStaticProps } from "next";
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { Layout } from "../components/layouts/Layout";
import { pokeApi } from "../api";
import { log } from "console";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de pokemons">
     
     <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map( ( pokemon ) => (
          
            <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ pokemon.id }>
            <Card 
                hoverable 
                clickable
                
            >
                <Card.Body css={{ p: 1 }}>
                    <Card.Image 
                        src={ pokemon.img }
                        width="100%"
                        height={ 140 }
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                    <Text transform='capitalize'>{ pokemon.name }</Text>
                    <Text>#{ pokemon.id }</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>   




          ))
        }
      </Grid.Container>




    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
