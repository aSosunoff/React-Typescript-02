import React from "react";
import { ITodoListProps } from "../Interfaces";
import TodoListItem from "./TodoListItem";
import cn from "classnames";
import styles from "./TodoList.module.scss";

const TodoList: React.FC<ITodoListProps> = ({
  todos,
  onSetImportantHandler,
  onDeleteHandler,
}) => {
  return (
    <ul className={cn("list-group", styles.list)}>
      {todos?.map((props) => (
        <li key={props.id} className={cn("list-group-item", styles.item)}>
          <TodoListItem
            {...props}
            onSetImportantHandler={onSetImportantHandler}
            onDeleteHandler={onDeleteHandler}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
