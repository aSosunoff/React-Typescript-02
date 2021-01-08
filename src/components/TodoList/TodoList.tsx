import React from "react";
import { ITodoList } from "../Interfaces";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC<ITodoList> = ({ todos }) => {
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
