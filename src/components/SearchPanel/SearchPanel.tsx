import React, { useCallback, useState } from "react";
import cn from "classnames";
import styles from "./SearchPanel.module.scss";
import { useTodoContext } from "../../context/todoContext";

const SearchPanel: React.FC = () => {
  const [labelFilter, setLabelFilter] = useState("");

  const { setFilterHandler } = useTodoContext();

  const labelFilterHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLabelFilter(e.target.value);
      setFilterHandler("label", e.target.value);
    },
    [setFilterHandler]
  );

  return (
    <input
      type="text"
      placeholder="type to search"
      className={cn("form-control", styles.input)}
      value={labelFilter}
      onChange={labelFilterHandler}
    />
  );
};

export default SearchPanel;
