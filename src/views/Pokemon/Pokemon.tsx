import React from "react";
import { useFetchSinglePokemon } from "./api";

export const Pokemon = () => {
  const pokemon_list = useFetchSinglePokemon({
    id: 1,
    config: {},
  });

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-orange-950">
        This should work
      </h1>
      This is the pokemon page
    </div>
  );
};
