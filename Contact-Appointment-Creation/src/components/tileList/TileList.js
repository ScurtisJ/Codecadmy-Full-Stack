import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({info}) => {

  return (
      <div className="tile-list">
        {info.map((tile,index) => {
          const {name, ...description} = tile;
            return (
          <Tile
            key={index}
            name={name}
            description={description}
            />
          );
        })}
      </div>
    );
}