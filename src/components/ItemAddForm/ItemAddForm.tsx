import React, { useCallback, useState } from "react";
import cn from "classnames";
import { useTodoContext } from "../../context/todoContext";
import styles from "./ItemAddForm.module.scss";

const ItemAddForm: React.FC = () => {
  const [label, setLabel] = useState("");

  const { addHandler } = useTodoContext();

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      addHandler(label);
      setLabel("");
    },
    [addHandler, label]
  );

  /* const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = new FormData(e.target as HTMLFormElement);

      const { label } = [...form.entries()].reduce<FormType>(
        (res, [key, value]) => ({
          ...(res as FormType),
          [key]: value as string,
        }),
        {} as FormType
      );

      addHandler(label);
    },
    [addHandler]
  ); */

  const inputHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setLabel(e.target.value),
    []
  );

  return (
    <form
      className={cn("d-flex", styles.item_add_form)}
      onSubmit={submitHandler}
    >
      <input
        type="text"
        className="form-control"
        value={label}
        onInput={inputHandler}
      />
      <button className="btn btn-outline-primary">Add</button>
    </form>
  );
};

export default ItemAddForm;
