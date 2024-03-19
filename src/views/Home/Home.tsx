import React, { useState } from "react";
import GroupOfPokemons from "../../assets/Images/GroupPokemon.svg";
import styles from "./base.module.scss";
import { Search } from "../../components";
import { useNavigate } from "react-router-dom";

export interface Props {
  color: string;
}

export const Home = (props: Props) => {
  const [searchValue, setSearch]: [string, (search: string) => void] =
    useState("");
  const navigate = useNavigate();

  function handleSubmit(searchTerm: string) {
    navigate(`/listView/${searchTerm}`);
  }

  return (
    <main className="h-screen flex justify-center items-center">
      <section className="flex flex-col gap-y-24 items-center justify-center text-center">
        <div>
          <div className="flex justify-center">
            <img src={GroupOfPokemons} alt="pokemon image" />
          </div>
          <div className={styles.title}>
            <h2 className={styles.header12}>
              Poké{" "}
              <span style={{ color: props.color ? props.color : "#000" }}>
                book
              </span>
            </h2>
            <p className={styles.paragraph}>
              Largest Pokémon index with information about every Pokemon you can
              think of.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Search
            placeholder="Enter pokemon name"
            onChange={(e) => setSearch(e.target.value)}
            onSearchClick={() => handleSubmit(searchValue)}
          />
          <p className={styles.view} onClick={() => navigate(`/listView/`)}>
            View all
          </p>
        </div>
      </section>
    </main>
  );
};
