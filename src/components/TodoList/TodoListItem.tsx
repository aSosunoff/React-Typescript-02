import React from "react";
import { ITodoListItemProps } from "../Interfaces";

const TodoListItem: React.FC<ITodoListItemProps> = ({
  label,
  important = false,
}) => {
  const style: React.CSSProperties = {
    color: important ? "tomato" : "black",
  };

  return <span style={style}>{label}</span>;
};

export default TodoListItem;
