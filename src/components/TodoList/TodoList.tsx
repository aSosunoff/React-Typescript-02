import React from "react";
import TodoListItem from "./TodoListItem";
import cn from "classnames";
import styles from "./TodoList.module.scss";
import { useTodoContext } from "../../context/todoContext";

const TodoList: React.FC = () => {
  const { todos } = useTodoContext();

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
