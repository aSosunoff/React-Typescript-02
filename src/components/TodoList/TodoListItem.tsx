import React, { useState } from "react";
import cn from "classnames";
import { ITodoListItemProps } from "../Interfaces";
import styles from "./TodoListItem.module.scss";

const TodoListItem: React.FC<ITodoListItemProps> = ({
  id,
  label,
  important = false,
  onSetImportantHandler,
  onDeleteHandler,
}) => {
  const [done, setDone] = useState(false);

  const style: React.CSSProperties = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  const labelClickHandler = () => setDone((prev) => !prev);
  const setImportantHandler = () => onSetImportantHandler(id);
  const deleteHandler = () => onDeleteHandler(id);

  return (
    <span className={cn(styles.item, { [styles.done]: done })}>
      <span className={styles.label} style={style} onClick={labelClickHandler}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={setImportantHandler}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={deleteHandler}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
