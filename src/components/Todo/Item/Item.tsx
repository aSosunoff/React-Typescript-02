import React from "react";
import cn from "classnames";
import { TodoType } from "../../Interfaces/TodoType";
import styles from "./Item.module.scss";
import { useTodoContext } from "../../../context/todoContext";

const TodoListItem: React.FC<TodoType> = ({ id, label, important, done }) => {
  const {
    setImportantHandler,
    setDoneHandler,
    deleteHandler,
  } = useTodoContext();

  const style: React.CSSProperties = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  return (
    <span className={cn(styles.item, { [styles.done]: done })}>
      <span
        className={styles.label}
        style={style}
        onClick={() => setDoneHandler(id)}
      >
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={() => setImportantHandler(id)}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={() => deleteHandler(id)}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
