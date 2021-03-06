import React from "react";
import TodoListItem from "../Item/Item";
import cn from "classnames";
import styles from "./List.module.scss";
import { TodoType } from "../../Interfaces/TodoType";

const TodoList: React.FC<{ todos: TodoType[] }> = ({ todos }) => {
  return (
    <ul className={cn("list-group", styles.list)}>
      {todos?.map((props) => (
        <li key={props.id} className={cn("list-group-item", styles.item)}>
          <TodoListItem {...props} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
