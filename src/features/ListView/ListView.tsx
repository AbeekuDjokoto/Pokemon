import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useFetchAllPokemon,
  useFetchSinglePokemon,
} from "../../views/Home/api";
import { conditional } from "../../utils/helper";
import { Card, Navbar, Preloader } from "../../components";
import classes from "./ListView.module.scss";
import { UseQueryResult } from "@tanstack/react-query";

export const ListView = () => {
  const [detailedPokemons, setDetailedPokemons] = useState([]);
  const [isLoadingPokemons, setIsLoadingPokemons] = useState(true);
  const search = useParams();

  interface Iitem {
    url: string;
    name: string;
  }

  interface IallPokemons {
    config: object;
    data: {
      results: Iitem[];
    };
    status: number;
    statusText: string;
  }

  interface DetailedPokemon {
    id: number;
    name: string;
  }

  const { mutateAsync, isLoading: singlePokemonLoading } =
    useFetchSinglePokemon({ id: "", config: {} });

  const searchTerm = search?.id;

  const { data: fetchAllPokemons, isLoading } =
    useFetchAllPokemon() as UseQueryResult<IallPokemons>;

  useEffect(() => {
    if (!isLoading) {
      const filteredData = fetchAllPokemons?.data?.results.filter(
        (item: Iitem) => item?.name?.includes(searchTerm || "")
      );

      const filteredPokemonIds = filteredData?.map(({ url }) => {
        return getPokemonIdFromUrl(url);
      });

      if (filteredPokemonIds) {
        const fetchDetailsForPokemons = async () => {
          const detailedDataResults: DetailedPokemon[] = await Promise.all(
            filteredPokemonIds.map((pokemonId: number) =>
              mutateAsync({
                id: pokemonId,
              }).then((response) => response.data)
            )
          );

          setDetailedPokemons(detailedDataResults);
          setIsLoadingPokemons(false);
        };
        fetchDetailsForPokemons();
      }
    }
  }, [isLoading, mutateAsync]);

  function getPokemonIdFromUrl(url: string): number {
    const parts = url.split("/");
    return parseInt(parts[parts.length - 2], 10);
  }

  function toMap() {
    detailedPokemons.map(({ name }) => {
      console.log("UNDER", name);
    });
  }

  toMap();
  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.cover}>
        {conditional(
          !singlePokemonLoading,
          <div className={classes.gridContainer}>
            {detailedPokemons.map((props: Props, index) => {
              return <Card key={index} {...props} />;
            })}
          </div>
        )}
      </div>
      {conditional(
        isLoadingPokemons,
        <div className={classes.loader}>
          <Preloader />
        </div>
      )}
    </div>
  );
};
