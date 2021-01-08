import React from "react";

interface ITodoListItem {
  children: string;
}

const TodoListItem: React.FC<ITodoListItem> = ({ children }) => {
  return <span>{children}</span>;
};

export default TodoListItem;
