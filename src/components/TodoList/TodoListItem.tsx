import React, { useState } from "react";
import cn from "classnames";
import { ITodo } from "../Interfaces";
import styles from "./TodoListItem.module.scss";
import { useTodoContext } from "../../context/todoContext";

const TodoListItem: React.FC<ITodo> = ({ id, label, important = false }) => {
  const [done, setDone] = useState(false);

  const { setImportantHandler, deleteHandler } = useTodoContext();

  const style: React.CSSProperties = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  const labelClickHandler = () => setDone((prev) => !prev);

  return (
    <span className={cn(styles.item, { [styles.done]: done })}>
      <span className={styles.label} style={style} onClick={labelClickHandler}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={setImportantHandler?.bind(null, id)}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={deleteHandler?.bind(null, id)}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
