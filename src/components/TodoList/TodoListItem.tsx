import React from "react";
import { ITodoListItemProps } from "../Interfaces";
import styles from "./TodoListItem.module.scss";

const TodoListItem: React.FC<ITodoListItemProps> = ({
  label,
  important = false,
}) => {
  const style: React.CSSProperties = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  return (
    <span className={styles.item}>
      <span className={styles.label} style={style}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
