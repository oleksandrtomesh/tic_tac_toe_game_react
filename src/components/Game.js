import React from "react";
import { Board } from "./Board";

export const Game = () => {
  const handlerClick = () => {
    console.log("onClick");
  };
  return (
    <div>
      <Board squarse={[1, 2, 3, 4, 5, 6, 7, 8, 9]} onClick={handlerClick} />
    </div>
  );
};
