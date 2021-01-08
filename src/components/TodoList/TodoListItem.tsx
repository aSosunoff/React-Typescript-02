import React from "react";
import { ITodoListItem } from "../Interfaces";

const TodoListItem: React.FC<ITodoListItem> = ({
  label,
  important = false,
}) => {
  const style: React.CSSProperties = {
    color: important ? "tomato" : "black",
  };

  return <span style={style}>{label}</span>;
};

export default TodoListItem;
