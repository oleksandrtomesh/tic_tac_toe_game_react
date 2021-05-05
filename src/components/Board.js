import React from "react";
import { Square } from "./Square";
const style = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"
};

export const Board = ({ squarse, onClick }) => {
  return (
    <div style={style}>
      {squarse.map((s, index) => (
        <Square key={index} value={s} onClick={onClick} />
      ))}
    </div>
  );
};
