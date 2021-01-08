import React from "react";
import { ITodo } from "../Interfaces";
import TodoListItem from "./TodoListItem";

interface ITodoList {
  todos?: ITodo[];
}

const TodoList: React.FC<ITodoList> = ({ todos }) => {
  return (
    <ul>
      {todos?.map(({ id, important, label }) => (
        <li key={id}>
          <TodoListItem important={important}>{label}</TodoListItem>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
