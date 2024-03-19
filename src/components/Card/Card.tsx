import React from "react";
import styles from "./Card.module.scss";
import { conditional } from "../../utils/helper";

interface Props {
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: String;
      };
    };
  };
  types: {
    name: string;
    url: string;
  }[];
}

export const pokemonTypes: any = {
  normal: "🐻",
  fighting: "🤺",
  flying: "🦋",
  poison: "☠️",
  ground: "🕳️",
  rock: "🪨",
  bug: "🐞",
  ghost: "👻",
  steel: "🛠️",
  fire: "🔥",
  water: "💦",
  grass: "🌿",
  electric: "⚡",
  psychic: "🔮",
  ice: "❄️",
  dragon: "🐉",
  dark: "🌑",
  fairy: "🧚🏾",
  unknown: "💎",
  shadow: "🌀",
};

export const Card = (props: Props) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const defaultHeight = "268px";
  const hoverHeight = "329px";

  console.log("props type", props.sprites);

  const sprites = props.sprites.other;

  const rootStyles = {
    height: isHovered ? hoverHeight : defaultHeight,
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles.root}
      key={props?.id}
      style={{ rootStyles }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.inner}>
        <div className="absolute bottom-[-20px]">
          <img
            className={styles.images}
            src={
              sprites.dream_world.front_default
                ? sprites.dream_world.front_default
                : sprites?.["official-artwork"]?.front_default
            }
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center text-center">
        <h1 className={styles.name}>{props?.name}</h1>
        <div className="flex items-center justify-center gap-[10px]">
          {props?.types?.map(({ type }, index) => {
            const typeName = type?.name;
            const typeEmoji = pokemonTypes[typeName];
            return (
              <div className={styles.attr} key={index}>
                <span>{typeEmoji}</span> <span> {type?.name}</span>
              </div>
            );
          })}
        </div>
        {conditional(
          isHovered,
          <div className={styles.view}>View Pokemon</div>
        )}
      </div>
    </div>
  );
};
