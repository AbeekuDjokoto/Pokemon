import React from "react";
import classes from "./Navbar.module.scss";
import groupPokemon from "../../assets/Images/GroupPokemon.svg";

export const Navbar = () => {
  return (
    <nav className={classes.root}>
      <div className="flex items-center">
        <div className={classes.logo}>
          <img src={groupPokemon} alt="logo" />
        </div>
        <h1 className={classes.appName}>
          <span style={{ color: "#000" }}>Poke</span>
          <span style={{ color: "#E85382" }}>book</span>
        </h1>
      </div>
    </nav>
  );
};
