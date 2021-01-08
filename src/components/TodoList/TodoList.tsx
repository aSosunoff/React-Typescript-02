import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC = () => {
  return (
    <ul>
      <li>
        <TodoListItem>Learn React</TodoListItem>
      </li>
      <li>
        <TodoListItem>Build Awesome App</TodoListItem>
      </li>
    </ul>
  );
};

export default TodoList;
