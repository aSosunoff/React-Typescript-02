import React, { useState } from "react";
import cn from "classnames";
import { ITodoListItemProps } from "../Interfaces";
import styles from "./TodoListItem.module.scss";

const TodoListItem: React.FC<ITodoListItemProps> = ({
  id,
  label,
  important = false,
  setImportantHandler,
}) => {
  const [done, setDone] = useState(false);

  const style: React.CSSProperties = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  const labelClickHandler = () => {
    setDone((prev) => !prev);
  };

  return (
    <span className={cn(styles.item, { [styles.done]: done })}>
      <span className={styles.label} style={style} onClick={labelClickHandler}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={setImportantHandler.bind(null, id)}
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
