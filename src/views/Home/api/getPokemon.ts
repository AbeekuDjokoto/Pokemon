import { useMutation, useQuery } from "@tanstack/react-query";
import { get } from "../../../libs";
import { object } from "prop-types";

function fetchSinglePokemon({ id }) {
  // const [, id] = queryKey;
  return get(`/pokemon/${id}`);
}

function useFetchSinglePokemon({ id, config } : { id: string, config: object } ) {
  return useMutation({
    mutationFn: fetchSinglePokemon,
    // queryKey: ["fetch_single_pokemon", { id }],
    ...config,
  });
}

function fetchAllPokemon() {
  return get(`/pokemon?offset=0&limit=40000`);
}

function useFetchAllPokemon({ config } = { config: {}}) {
  return useQuery({
    queryFn: fetchAllPokemon,
    queryKey: ["fetch_all_pokemon"],
    ...config,
  });
}

export { useFetchSinglePokemon, useFetchAllPokemon };
