import React from "react";
import { ITodoListProps } from "../Interfaces";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC<ITodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos?.map(({ id, ...props }) => (
        <li key={id}>
          <TodoListItem {...props} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
