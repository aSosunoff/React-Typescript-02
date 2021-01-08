import React from "react";

interface ITodoListItem {
  children: string;
  important?: boolean;
}

const TodoListItem: React.FC<ITodoListItem> = ({
  children,
  important = false,
}) => {
  const style: React.CSSProperties = {
    color: important ? "tomato" : "black",
  };

  return <span style={style}>{children}</span>;
};

export default TodoListItem;
