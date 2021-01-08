import React from "react";
import { ITodoListProps } from "../Interfaces";
import TodoListItem from "./TodoListItem";
import cn from "classnames";
import styles from "./TodoList.module.scss";

const TodoList: React.FC<ITodoListProps> = ({ todos }) => {
  return (
    <ul className={cn("list-group", styles.list)}>
      {todos?.map(({ id, ...props }) => (
        <li key={id} className={cn("list-group-item", styles.item)}>
          <TodoListItem {...props} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
