import React from "react";
import { useTodoContext } from "../../context/todoContext";
import styles from "./ItemAddForm.module.scss";

const ItemAddForm: React.FC = () => {
  const { addHandler } = useTodoContext();
  return (
    <div className={styles.item_add_form}>
      <button
        className="btn btn-btn-outline-secondary"
        onClick={addHandler?.bind(null, "test")}
      >
        Добавить
      </button>
    </div>
  );
};

export default ItemAddForm;
